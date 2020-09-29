import React from 'react';

const Body = (props) => {
    return (
        <div className="col-md-4 mt-2 d-inline-block">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{props.nama}</h3>
                    <span>{props.jurusan}</span>
                </div>
            </div>
        </div>
    )
}

Body.defaultProps = {
    nama: 'Belum Di Isi',
    jurusan: 'Belum Di Pilih'
}

export default Body;