import React, {useState, useEffect} from 'react';
import Style from './style';
import logoSmall from '../../static/logo-small.svg';

export default function Products({ products, totalPages, pagination, page, setPage, setPagination, productsPage, setProductsPage }) {
    useEffect(() => {
        if (products) {
            setProductsPage(products.slice((page - 1) * 20, page * 20));
        }
    }, [page]);
    const formatTime = (time) => {
        let date = new Date(time);
        let dd = date.getDate();

        let mm = date.getMonth()+1; 
        const yyyy = date.getFullYear();
        if(dd<10) 
        {
            dd='0'+dd;
        } 

        if(mm<10) 
        {
            mm='0'+mm;
        }
        const yy = String(yyyy).slice(2);
        date = dd+'/'+mm+'/'+yy;
        return date;
    }
    const changePage = (item) => {
        if (item < 1) {
            setPage(1);
            window.scrollTo(0, 0)
            return;
        }
        if (item > totalPages) {
            setPage(totalPages);
            window.scrollTo(0, 0)
            return;
        }
        if (item !== '...') {
            if (totalPages > 5) {
                if (2 < item && item < totalPages) setPagination([1, '...', item, '...', totalPages]);
                if (item < 3 || item > totalPages - 2) setPagination([1, 2, '...', totalPages - 1, totalPages]);
            }
            setPage(item);
            window.scrollTo(0, 0)
            return;
        }
    }
    return (
        <Style>
            <div className="products-container">
                {productsPage && productsPage.map((item)=>(
                    <div className="card" key={item.id}>
                        <img className="image" src={item.imageUrl} alt={item.name} />
                        <div className="frame">
                            <p className="name">{item.name}</p>
                            <p className="expiry">Hiệu lực: {formatTime(item.activeTimeFrom)}-{formatTime(item.activeTimeTo)}</p>
                            <div className="point">
                                <p className="text">{item.requiredPoints.toLocaleString('de-DE')}</p>
                                <img src={logoSmall} className="logo-small" alt="logo small"></img>
                            </div>
                            <button className="button"> Đổi quà </button>
                        </div>
                    </div>
                    )
                )}
            </div>
            <div className="pagination">
                <p onClick={()=>changePage(page-1)}>&laquo;</p>
                {pagination && pagination.map((item, index) =>
                    <p className={item===page?"active":""} onClick={()=> changePage(item)}>{item}</p>
                )}
                <p onClick={()=>changePage(page+1)}>&raquo;</p>
             </div>  
        </Style>
    )
}