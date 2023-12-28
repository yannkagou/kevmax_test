import React, { useEffect, useState } from 'react';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import axios from 'axios'
import './index.css'

interface Params {
    baseUrl: string
    method: string
}

const getConfig: Params = {
  baseUrl: 'https://c076-2a0d-3344-1598-4510-6903-2e31-d840-9141.ngrok-free.app/api/v2/tickets/docs#/boards/get_boards_api_v2_tickets_boards_get',
  method: 'get'
}

const postConfig : Params = {
  baseUrl: 'https://c076-2a0d-3344-1598-4510-6903-2e31-d840-9141.ngrok-free.app/api/v2/tickets/docs#/boards/create_board_api_v2_tickets_boards_post',
  method: 'post'
}



interface Board {
  board_id: number;
  board_name: string;
  board_description: string;
  board_amount_column: number;
  date_added?: Date;
  date_modified?: Date;
}

const fakeBoard: Board = {
  board_id:1,
  board_name:'4.3 Versorgerrechnung (FM)',
  board_description:'Gas, Strom, Wasser, etc',
  board_amount_column:3,

}

const BoardList: React.FC = () => {

  const [boards, setBoards] = useState<Board[]>([]);
  const [selectedBoard, setSelectedBoard] = useState<Board | null>(null);

  // const [columnsIsOpen, setColumnsIsOpen] = useState(false);

  const getAPI = async (): Promise<any> =>{
    return await axios({
        ...getConfig,
        url: `${getConfig.baseUrl}`,
    }).then ( (response) => {
        console.log(response)
        setBoards(response.data);
    }).catch((error) =>{
        console.log(error)
    })
  }

  useEffect(() => {
    getAPI();
  }, []);



  const handleBoardClick = (board: Board) => {
    setSelectedBoard(board);
  };

  const handlePopupClose = () => {
    setSelectedBoard(null);
  };

  return (
    <div className='py-3 w-full h-full bg-[#F9FBFF] rounded-md'>
      <table className='w-full bg-[#F9FBFF] rounded-md'>
        <thead className='w-full bg-[#F9FBFF]'>
          <tr className='py-2 mx-3 pl-10 flex items-center justify-between bg-[#F9FBFF]'>
            <th className='flex items-center justify-start bg-[#F9FBFF] w-1/3'>
                <p className='bg-[#F9FBFF]'>Board name</p>
                <ImportExportOutlinedIcon className='bg-[#F9FBFF]'/>
            </th>
            <th className='flex items-center justify-start bg-[#F9FBFF] w-1/2'>Board Description</th>
            <th className='flex items-center justify-start bg-[#F9FBFF] w-1/6'>
                <p className='bg-[#F9FBFF]'> Column count</p>
                <ImportExportOutlinedIcon className='bg-[#F9FBFF]'/>
            </th>
          </tr>
        </thead>
        <tbody className='w-full bg-[#F9FBFF]'>
          {Array.isArray(boards) && boards.length > 0 ? (
            boards.map((board, index) => (
              <tr key={index} onClick={() => handleBoardClick(board)} className='w-full pl-8 py-2 flex items-start justify-start '>
                <td className='flex items-center justify-start'>{board.board_name}</td>
                <td className='flex items-center justify-start'>{board.board_description}</td>
                <td className='flex items-center justify-start'>{board.board_amount_column}</td>
              </tr>
            ))
          ) : (
            <>
            <tr className='py-2 mx-3 pl-10 flex items-center justify-between rounded-md cursor-pointer' onClick={() => handleBoardClick(fakeBoard)}>
              <td className='flex items-center justify-start w-1/3 gap-2'>
                <LanguageOutlinedIcon className=''/>
                <div className='flex flex-col'>
                  <p className='text-[20px] font-extrabold '>4.3 Versorgerrechnung (FM)</p>
                  <p className='text-[12px]'>Today - 10:15</p>
                </div>
              </td>
              <td className='flex items-center justify-start w-1/2'>
                <p className='text-[18px]'>Gas, Strom, Wasser, etc</p>
              </td>
              <td className='flex items-center justify-start w-1/6 gap-2'>
                  <p className='text-[18px]'>04</p>
                  <div className='flex bg-[#3C5EB7] p-2 rounded-md w-[130px] items-center justify-center gap-2'>
                    <svg className='bg-[#3C5EB7]' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.25 3.5625C1.25 2.94919 1.49364 2.36099 1.92732 1.92732C2.36099 1.49364 2.94919 1.25 3.5625 1.25H17.4375C18.0508 1.25 18.639 1.49364 19.0727 1.92732C19.5064 2.36099 19.75 2.94919 19.75 3.5625V17.4375C19.75 18.0508 19.5064 18.639 19.0727 19.0727C18.639 19.5064 18.0508 19.75 17.4375 19.75H3.5625C2.94919 19.75 2.36099 19.5064 1.92732 19.0727C1.49364 18.639 1.25 18.0508 1.25 17.4375V3.5625Z" stroke="#F0F2F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M4.71875 4.71875H8.1875V16.2812H4.71875V4.71875Z" stroke="#F0F2F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M11.1307 4.71875H14.5994V11.6562H11.1307V4.71875Z" stroke="#F0F2F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className='text-[16px] bg-[#3C5EB7] text-white'>Kanban</p>
                  </div>
              </td>
            </tr>
            <tr className='py-2 mx-3 pl-10 flex items-center justify-between rounded-md bg-[#F9FBFF] cursor-pointer' onClick={() => handleBoardClick(fakeBoard)}>
              <td className='flex items-center justify-start w-1/3 gap-2 bg-[#F9FBFF]'>
                <LanguageOutlinedIcon className='bg-[#F9FBFF]'/>
                <div className='flex flex-col bg-[#F9FBFF]'>
                  <p className='text-[20px] font-extrabold bg-[#F9FBFF]'>4.3 Versorgerrechnung (FM)</p>
                  <p className='text-[12px] bg-[#F9FBFF]'>Today - 10:15</p>
                </div>
              </td>
              <td className='flex items-center justify-start w-1/2 bg-[#F9FBFF]'>
                <p className='text-[18px] items-center bg-[#F9FBFF]'>Gas, Strom, Wasser, etc</p>
              </td>
              <td className='flex items-center justify-start w-1/6 gap-2 bg-[#F9FBFF]'>
                  <p className='text-[18px] bg-[#F9FBFF]'>04</p>
                  <div className='flex bg-[#3C5EB7] p-2 rounded-md w-[130px] items-center justify-center gap-2'>
                    <svg className='bg-[#3C5EB7]' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.25 3.5625C1.25 2.94919 1.49364 2.36099 1.92732 1.92732C2.36099 1.49364 2.94919 1.25 3.5625 1.25H17.4375C18.0508 1.25 18.639 1.49364 19.0727 1.92732C19.5064 2.36099 19.75 2.94919 19.75 3.5625V17.4375C19.75 18.0508 19.5064 18.639 19.0727 19.0727C18.639 19.5064 18.0508 19.75 17.4375 19.75H3.5625C2.94919 19.75 2.36099 19.5064 1.92732 19.0727C1.49364 18.639 1.25 18.0508 1.25 17.4375V3.5625Z" stroke="#F0F2F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M4.71875 4.71875H8.1875V16.2812H4.71875V4.71875Z" stroke="#F0F2F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M11.1307 4.71875H14.5994V11.6562H11.1307V4.71875Z" stroke="#F0F2F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className='text-[16px] bg-[#3C5EB7] text-white'>Kanban</p>
                  </div>
              </td>
            </tr>
            <tr className='py-2 mx-3 pl-10 flex items-center justify-between rounded-md cursor-pointer' onClick={() => handleBoardClick(fakeBoard)}>
              <td className='flex items-center justify-start w-1/3 gap-2'>
                <LanguageOutlinedIcon className=''/>
                <div className='flex flex-col '>
                  <p className='text-[20px] font-extrabold '>4.3 Versorgerrechnung (FM)</p>
                  <p className='text-[12px]'>Today - 10:15</p>
                </div>
              </td>
              <td className='flex items-center justify-start w-1/2 '>
                <p className='text-[18px] items-center '>Gas, Strom, Wasser, etc</p>
              </td>
              <td className='flex items-center justify-start w-1/6 gap-2 '>
                <p className='text-[18px] '>04</p>
                <div className='flex bg-[#3C5EB7] p-2 rounded-md w-[130px] items-center justify-center gap-2'>
                  <svg className='bg-[#3C5EB7]' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.25 3.5625C1.25 2.94919 1.49364 2.36099 1.92732 1.92732C2.36099 1.49364 2.94919 1.25 3.5625 1.25H17.4375C18.0508 1.25 18.639 1.49364 19.0727 1.92732C19.5064 2.36099 19.75 2.94919 19.75 3.5625V17.4375C19.75 18.0508 19.5064 18.639 19.0727 19.0727C18.639 19.5064 18.0508 19.75 17.4375 19.75H3.5625C2.94919 19.75 2.36099 19.5064 1.92732 19.0727C1.49364 18.639 1.25 18.0508 1.25 17.4375V3.5625Z" stroke="#F0F2F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.71875 4.71875H8.1875V16.2812H4.71875V4.71875Z" stroke="#F0F2F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.1307 4.71875H14.5994V11.6562H11.1307V4.71875Z" stroke="#F0F2F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p className='text-[16px] bg-[#3C5EB7] text-white'>Kanban</p>
                </div>
                </td>
              </tr>
              </>
          )}
        </tbody>
      </table>

      {selectedBoard && (
        <div className="popup ">
          <div className="popup-content">
            <div className='flex bg-black py-2 px-5 items-center justify-between rounded-t-md'>
                <h2 className='text-white bg-black'>Board Settings</h2>
                <svg className=' bg-black' width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.4875 2.9755C13.1265 0.3415 16.8735 0.3415 17.5125 2.9755C17.6084 3.3712 17.7963 3.73867 18.0611 4.048C18.3258 4.35733 18.6598 4.59978 19.036 4.75562C19.4121 4.91146 19.8197 4.97628 20.2257 4.9448C20.6316 4.91333 21.0244 4.78645 21.372 4.5745C23.6865 3.1645 26.337 5.8135 24.927 8.1295C24.7153 8.47698 24.5887 8.86951 24.5573 9.27516C24.5259 9.68081 24.5906 10.0882 24.7463 10.4641C24.9019 10.84 25.1441 11.1739 25.4531 11.4386C25.7621 11.7033 26.1292 11.8914 26.5245 11.9875C29.1585 12.6265 29.1585 16.3735 26.5245 17.0125C26.1288 17.1084 25.7613 17.2963 25.452 17.5611C25.1427 17.8258 24.9002 18.1598 24.7444 18.536C24.5885 18.9121 24.5237 19.3197 24.5552 19.7257C24.5867 20.1316 24.7135 20.5244 24.9255 20.872C26.3355 23.1865 23.6865 25.837 21.3705 24.427C21.023 24.2153 20.6305 24.0887 20.2248 24.0573C19.8192 24.0259 19.4118 24.0906 19.0359 24.2463C18.66 24.4019 18.3261 24.6441 18.0614 24.9531C17.7967 25.2621 17.6086 25.6292 17.5125 26.0245C16.8735 28.6585 13.1265 28.6585 12.4875 26.0245C12.3916 25.6288 12.2037 25.2613 11.9389 24.952C11.6742 24.6427 11.3402 24.4002 10.964 24.2444C10.5879 24.0885 10.1803 24.0237 9.77432 24.0552C9.36839 24.0867 8.97563 24.2135 8.628 24.4255C6.3135 25.8355 3.663 23.1865 5.073 20.8705C5.28465 20.523 5.41133 20.1305 5.44273 19.7248C5.47413 19.3192 5.40936 18.9118 5.25371 18.5359C5.09805 18.16 4.85589 17.8261 4.54691 17.5614C4.23793 17.2967 3.87085 17.1086 3.4755 17.0125C0.8415 16.3735 0.8415 12.6265 3.4755 11.9875C3.8712 11.8916 4.23867 11.7037 4.548 11.4389C4.85733 11.1742 5.09978 10.8402 5.25562 10.464C5.41146 10.0879 5.47628 9.68025 5.4448 9.27432C5.41333 8.86839 5.28645 8.47563 5.0745 8.128C3.6645 5.8135 6.3135 3.163 8.6295 4.573C10.1295 5.485 12.0735 4.678 12.4875 2.9755Z" stroke="#F9FBFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </div>
            <div className='rounded-b-md py-3 px-5'>
                <div className=''>
                    <p className='text-[#C0C9E0] text-[12px]'>Board name</p>
                    <input type='text' className='border-2 w-full p-2 rounded-md text-[16px] pl-2 font-extrabold outline-none focus:border-red-300' value={selectedBoard.board_name} />
                </div>
                <div className='mb-4'>
                    <p className='text-[#C0C9E0] text-[12px]'>Board description</p>
                    <input type='textarea' className='border-2 w-full p-2 rounded-md text-[16px] pl-2 font-extrabold outline-none focus:border-red-300' value={selectedBoard.board_description} />
                </div>
                <div className='flex items-center justify-between gap-2 p-2 bg-gray-200 mb-4'>
                    <button className='flex items-center justify-center gap-2 w-[157px] h-[37px] bg-[#D51130] rounded-md'>
                      <svg className='bg-[#D51130]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3.75C1 3.02065 1.28973 2.32118 1.80546 1.80546C2.32118 1.28973 3.02065 1 3.75 1H20.25C20.9793 1 21.6788 1.28973 22.1945 1.80546C22.7103 2.32118 23 3.02065 23 3.75V20.25C23 20.9793 22.7103 21.6788 22.1945 22.1945C21.6788 22.7103 20.9793 23 20.25 23H3.75C3.02065 23 2.32118 22.7103 1.80546 22.1945C1.28973 21.6788 1 20.9793 1 20.25V3.75Z" stroke="#F9FBFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.125 5.125H9.25V18.875H5.125V5.125Z" stroke="#F9FBFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13 5H17V19H13V5Z" stroke="#F9FBFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p className='bg-[#D51130] text-white'>Columns</p>
                    </button>
                    <button className='flex items-center justify-center gap-2 w-[157px] h-[37px] bg-[#C0C9E0] rounded-md'>
                      <svg className='bg-[#C0C9E0]' width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.60229 1.57031V6.38699C8.60229 6.70635 8.72916 7.01264 8.95499 7.23846C9.18081 7.46429 9.4871 7.59116 9.80646 7.59116H14.6231" stroke="#41546A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.2145 18.4287H3.78529C3.14656 18.4287 2.53399 18.1749 2.08234 17.7233C1.63069 17.2716 1.37695 16.6591 1.37695 16.0203V3.97865C1.37695 3.33992 1.63069 2.72735 2.08234 2.2757C2.53399 1.82405 3.14656 1.57031 3.78529 1.57031H8.60197L14.6228 7.59116V16.0203C14.6228 16.6591 14.3691 17.2716 13.9174 17.7233C13.4658 18.1749 12.8532 18.4287 12.2145 18.4287Z" stroke="#41546A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p className='bg-[#C0C9E0]'>Documents type</p>
                    </button>
                    <button className='flex items-center justify-center gap-2 w-[157px] h-[37px] bg-[#C0C9E0] rounded-md'>
                      <svg className='bg-[#C0C9E0]' width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.25 2.23944C1.25 1.94905 1.33764 1.67056 1.49364 1.46522C1.64964 1.25989 1.86123 1.14453 2.08185 1.14453H12.064C12.2846 1.14453 12.4962 1.25989 12.6522 1.46522C12.8082 1.67056 12.8958 1.94905 12.8958 2.23944V19.758C12.8958 20.0483 12.8082 20.3268 12.6522 20.5322C12.4962 20.7375 12.2846 20.8529 12.064 20.8529H2.08185C1.86123 20.8529 1.64964 20.7375 1.49364 20.5322C1.33764 20.3268 1.25 20.0483 1.25 19.758V2.23944Z" stroke="#41546A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.4792 2.09013C16.4792 1.83934 16.5264 1.59883 16.6104 1.42149C16.6944 1.24416 16.8084 1.14453 16.9272 1.14453H22.3022C22.421 1.14453 22.5349 1.24416 22.6189 1.42149C22.7029 1.59883 22.7501 1.83934 22.7501 2.09013V17.2198C22.7501 17.4706 22.7029 17.7111 22.6189 17.8884C22.5349 18.0657 22.421 18.1654 22.3022 18.1654H16.9272C16.8084 18.1654 16.6944 18.0657 16.6104 17.8884C16.5264 17.7111 16.4792 17.4706 16.4792 17.2198V2.09013Z" stroke="#41546A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      <p className='bg-[#C0C9E0]'>priorities</p>
                    </button>
                </div>
                {/* { columnsIsOpen && ( */}
                  <div className='bg-gray-200 rounded-md flex items-center justify-between px-2'>
                    <div className='bg-gray-200 rounded-md'>
                        <p className='bg-gray-200 text-[16px] font-extrabold m-1'>Versorgerrechnung prüfen</p>
                        <p className='bg-gray-200 text-[14px] m-1 text-[#41546A]'>Zuordnung Kunde, PoS und Vertrag prüfen sowie bei In...</p>
                        <p className='bg-gray-200 text-[12px] m-1 text-[#41546A]'>Team: <span className='bg-gray-200 text-[12px] font-extrabold'>FM</span> Rank: <span className='bg-gray-200 text-[12px] font-extrabold'>10</span></p>
                    </div>
                    <button className='bg-[#21BA4B] p-1'>
                      <svg className='bg-[#21BA4B]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 19H5.69715L18.0272 6.66997C18.3356 6.36155 18.5803 5.9954 18.7472 5.59243C18.9141 5.18946 19 4.75756 19 4.32139C19 3.88522 18.9141 3.45332 18.7472 3.05035C18.5803 2.64738 18.3356 2.28123 18.0272 1.97281C17.7188 1.66439 17.3526 1.41974 16.9496 1.25283C16.5467 1.08591 16.1148 1 15.6786 1C15.2424 1 14.8105 1.08591 14.4076 1.25283C14.0046 1.41974 13.6385 1.66439 13.33 1.97281L1 14.3028V19Z" stroke="#F9FBFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.1558 3.14844L16.8529 7.84559" stroke="#F9FBFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <div className='bg-gray-200 rounded-md flex items-center justify-between px-2'>
                    <div className='bg-gray-200 rounded-md'>
                        <p className='bg-gray-200 text-[16px] font-extrabold m-1'>Versorgerrechnung prüfen</p>
                        <p className='bg-gray-200 text-[14px] m-1 text-[#41546A]'>Zuordnung Kunde, PoS und Vertrag prüfen sowie bei In...</p>
                        <p className='bg-gray-200 text-[12px] m-1 text-[#41546A]'>Team: <span className='bg-gray-200 text-[12px] font-extrabold'>FM</span> Rank: <span className='bg-gray-200 text-[12px] font-extrabold'>10</span></p>
                    </div>
                    <button className='bg-[#21BA4B] p-1'>
                      <svg className='bg-[#21BA4B]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 19H5.69715L18.0272 6.66997C18.3356 6.36155 18.5803 5.9954 18.7472 5.59243C18.9141 5.18946 19 4.75756 19 4.32139C19 3.88522 18.9141 3.45332 18.7472 3.05035C18.5803 2.64738 18.3356 2.28123 18.0272 1.97281C17.7188 1.66439 17.3526 1.41974 16.9496 1.25283C16.5467 1.08591 16.1148 1 15.6786 1C15.2424 1 14.8105 1.08591 14.4076 1.25283C14.0046 1.41974 13.6385 1.66439 13.33 1.97281L1 14.3028V19Z" stroke="#F9FBFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.1558 3.14844L16.8529 7.84559" stroke="#F9FBFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <div className='bg-gray-200 rounded-md flex items-center justify-between px-2'>
                    <div className='bg-gray-200 rounded-md'>
                        <p className='bg-gray-200 text-[16px] font-extrabold m-1'>Versorgerrechnung prüfen</p>
                        <p className='bg-gray-200 text-[14px] m-1 text-[#41546A]'>Zuordnung Kunde, PoS und Vertrag prüfen sowie bei In...</p>
                        <p className='bg-gray-200 text-[12px] m-1 text-[#41546A]'>Team: <span className='bg-gray-200 text-[12px] font-extrabold'>FM</span> Rank: <span className='bg-gray-200 text-[12px] font-extrabold'>10</span></p>
                    </div>
                    <button className='bg-[#21BA4B] p-1'>
                      <svg className='bg-[#21BA4B]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 19H5.69715L18.0272 6.66997C18.3356 6.36155 18.5803 5.9954 18.7472 5.59243C18.9141 5.18946 19 4.75756 19 4.32139C19 3.88522 18.9141 3.45332 18.7472 3.05035C18.5803 2.64738 18.3356 2.28123 18.0272 1.97281C17.7188 1.66439 17.3526 1.41974 16.9496 1.25283C16.5467 1.08591 16.1148 1 15.6786 1C15.2424 1 14.8105 1.08591 14.4076 1.25283C14.0046 1.41974 13.6385 1.66439 13.33 1.97281L1 14.3028V19Z" stroke="#F9FBFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.1558 3.14844L16.8529 7.84559" stroke="#F9FBFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </div>
                {/* )  */}

                {/* } */}
                <div className='mt-9 flex items-center justify-between mb-1 gap-5'>
                  <button className='w-1/3 rounded-md bg-[#C0C9E0] p-2 text-center' onClick={handlePopupClose}>Cancel</button>
                  <button className='w-2/3 rounded-md bg-[#D51130] p-2 text-center' onClick={handlePopupClose}>Apply</button>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoardList;