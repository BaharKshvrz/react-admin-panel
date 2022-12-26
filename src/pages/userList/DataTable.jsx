import {useState}from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../DummyData';
import { Link } from 'react-router-dom';

export default function DataTable() {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
         field: 'user', headerName: 'User Info', width: 200, renderCell: (params) => {
              return (
                  <div className='userListUser'>
                      <img src={params.row.avatar} alt="" className="userListImg" />
                      {params.row.username}
                  </div>
              );
        }},
        { field: 'email', headerName: 'Email', width: 300 },
        { field: 'status', headerName: 'Status', width: 150 },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          type: 'number',
          width: 200,
          },
          {
              field: 'action',
              headerName: 'Action',
              width: 200,
              renderCell: (params) => {
                  return (
                      <>
                          <Link to={`/users/${params.row.id}`}>
                             <button className="userListEdit">Edit</button>
                          </Link>
                          <DeleteOutline className='userListDelete' onClick={ () => handleDelete(params.row.id)} />
                      </>
                  );
              }
        }
        ];
    
  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}


