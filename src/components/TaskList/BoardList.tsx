import React, { useEffect, useState } from 'react';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import axios from 'axios'

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
  date_added: Date;
  date_modified: Date;
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
        const data =  response.data;
        setBoards(data);
    }).catch((error) =>{
        console.log(error)
        return {
            status: error.status,
            data: error.response
        }
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
    <div className='bg-[#F9FBFF] pt-5 w-full'>
      <table className=''>
        <thead className=''>
          <tr className='w-full pl-8 flex items-start gap-[350px]'>
            <th className='flex items-center justify-start'>
                <p>Board name</p>
                <ImportExportOutlinedIcon />
            </th>
            <th>Board Description</th>
            <th className='flex items-center justify-start'>
                <p>Column count</p>
                <ImportExportOutlinedIcon />
            </th>
          </tr>
        </thead>
        <tbody className='w-full'>
          {Array.isArray(boards) && boards.length > 0 ? (
            boards.map((board, index) => (
              <tr key={index} onClick={() => handleBoardClick(board)} className='w-full pl-8 flex items-start gap-[350px]'>
                <td>{board.board_name}</td>
                <td>{board.board_description}</td>
                <td>{board.board_amount_column}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Nothing</td>
              <td>Nothing</td>
              <td>Nothing</td>
            </tr>
          )}
        </tbody>
      </table>

      {selectedBoard && (
        <div className="popup">
          <div className="popup-content">
            <div>
                <h2>Board Settings</h2>
                <button>logo</button>
            </div>
            <div>
                <div>
                    <p>Board name</p>
                    <button>{selectedBoard.board_name}</button>
                </div>
                <div>
                    <p>Board description</p>
                    <button>{selectedBoard.board_description}</button>
                </div>
                <div>
                    <button>Columns</button>
                    <button>Documents type</button>
                    <button>priorities</button>
                </div>
                { (
                    <div>
                        <div>
                            <h3>Versorgerrechnung prüfen</h3>
                            <p>Zuordnung Kunde, PoS und Vertrag prüfen sowie bei In...</p>
                            <p>Team:FM Rank:10</p>
                        </div>
                        <div>
                            <button>
                                check
                            </button>
                        </div>
                        <div>
                            <h3>Versorgerrechnung prüfen</h3>
                            <p>Zuordnung Kunde, PoS und Vertrag prüfen sowie bei In...</p>
                            <p>Team:FM Rank:10</p>
                        </div>
                        <div>
                            <button>
                                check
                            </button>
                        </div>
                        <div>
                            <h3>Versorgerrechnung prüfen</h3>
                            <p>Zuordnung Kunde, PoS und Vertrag prüfen sowie bei In...</p>
                            <p>Team:FM Rank:10</p>
                        </div>
                        <div>
                            <button>
                                check
                            </button>
                        </div>
                    </div>
                ) 

                }
                <button onClick={handlePopupClose}>Cancel</button>
                <button onClick={handlePopupClose}>Apply</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoardList;