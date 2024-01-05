


import styles from './search.module.css';

interface Props {
    className?: string;
    variant: 'homepage' | 'search';
}

const Search = ({ className, variant }: Props) => {
    return (
        <form className={`${styles.search} ${className && className}`}>

        </form>
    )
}

export default Search
