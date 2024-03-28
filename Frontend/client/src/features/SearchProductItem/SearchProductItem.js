
import classNames from 'classnames/bind';
import styles from './SearchProductItem.module.scss';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);
function SearchProductItem({ ...props }) {
    const { data, setSearchResult, setSearchValue } = props;

    const handleHideResult = () => {
        setSearchValue('');
        setSearchResult([]);
    };
    return (
        <Link to={`/product/${data.maSP}`} className={cx('wrapper')} onClick={() => handleHideResult()}>
    
            <img className={cx('avatar')} src={data.hinh} alt={data.tenSP} />
            <span className={cx('name')}>{data.tenSP}</span>
        </Link>
    );
}



export default SearchProductItem;
