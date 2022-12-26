import {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../DummyData';
import { Link } from 'react-router-dom';

export default function DataTable() {
    const [data, setData] = useState(productRows);
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
         field: 'product', headerName: 'Product Info', width: 250, renderCell: (params) => {
              return (
                  <div className='productListUser'>
                      <img src={params.row.img} alt="" className="productListImg" />
                      {params.row.name}
                  </div>
              );
        }
      },
        { field: 'stock', headerName: 'Stock', width: 130 },
        { field: 'status', headerName: 'Status', width: 130 },
        {
          field: 'price',
          headerName: 'Price',
          type: 'number',
          width: 250,
          },
          {
              field: 'action',
              headerName: 'Action',
              width: 200,
              renderCell: (params) => {
                  return (
                      <>
                          <Link to={`/products/${params.row.id}`}>
                             <button className="productListEdit">Edit</button>
                          </Link>
                          <DeleteOutline className='productListDelete' onClick={ () => handleDelete(params.row.id)} />
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


