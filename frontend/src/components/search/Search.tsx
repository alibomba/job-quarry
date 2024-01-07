import React, { useState, useRef } from 'react';
import Error from '../error/Error';
import { useLazyQuery, useQuery } from '@apollo/client';
import styles from './search.module.css';
import { GET_TECHNOLOGIES, LOCATION_AUTOCOMPLETE } from '../../graphql/queries';
import { IoMdClose } from 'react-icons/io';

interface Props {
    className?: string;
    variant: 'homepage' | 'search';
}

const Search = ({ className, variant }: Props) => {
    const [autocompleteQuery] = useLazyQuery(LOCATION_AUTOCOMPLETE);
    useQuery(GET_TECHNOLOGIES, {
        onCompleted: data => setTechnologies(data.getTechnologies)
    });
    const locationRef = useRef<HTMLInputElement>(null);
    const [locationAutocomplete, setLocationAutocomplete] = useState<string[]>([]);
    const [technologies, setTechnologies] = useState<string[]>([]);
    const [technologiesVisible, setTechnologiesVisible] = useState<boolean>(false);
    const [technologiesChecked, setTechnologiesChecked] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);


    async function autocomplete(e: React.ChangeEvent) {
        const input = e.target as HTMLInputElement;
        if (!input.value) {
            setLocationAutocomplete([]);
            return;
        }
        const { data, error } = await autocompleteQuery({ variables: { phrase: input.value } });
        if (error) {
            setError('Coś poszło nie tak, spróbuj ponownie później...');
            return;
        }
        setLocationAutocomplete(data.locationAutocomplete);
    }

    function autocompleteOff(e: React.KeyboardEvent) {
        console.log(e.key);
        if (e.key === 'Escape') {
            setLocationAutocomplete([]);
        }
    }

    function useAutocomplete(e: React.MouseEvent) {
        const button = e.target as HTMLButtonElement;
        if (locationRef.current) {
            locationRef.current.value = button.innerText;
            setLocationAutocomplete([]);
        }
    }

    function toggleTechnology(e: React.MouseEvent) {
        const button = e.target as HTMLButtonElement;
        const technology = button.innerText;
        setTechnologiesChecked(prev => {
            if (prev.includes(technology)) {
                return prev.filter(item => item !== technology);
            }
            else {
                return [technology, ...prev];
            }
        });
    }

    function searchAndRedirect(e: React.FormEvent) {
        e.preventDefault();
    }

    async function search(e: React.FormEvent) {
        e.preventDefault();
    }

    if (error) {
        return <Error>{error}</Error>
    }

    return (
        <>
            <form onSubmit={variant === 'homepage' ? searchAndRedirect : search} className={`${styles.search} ${className && className}`}>
                <div className={styles.search__row}>
                    <input className={styles.search__input} aria-label='Fraza' placeholder='Fraza' type="text" maxLength={50} />
                    <div className={styles.search__inputContainer}>
                        <input ref={locationRef} onChange={autocomplete} onKeyDown={autocompleteOff} className={`${styles.search__input} ${locationAutocomplete.length > 0 && styles.search__input_square}`} aria-label='Miasto' placeholder='Miasto' type="text" maxLength={40} />
                        {
                            locationAutocomplete.length > 0 &&
                            <div className={styles.search__autocomplete}>
                                {
                                    locationAutocomplete.map(location => {
                                        return (
                                            <button onClick={useAutocomplete} key={location} type='button' className={styles.search__autocompleteButton}>{location}</button>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                    <select className={styles.search__input} aria-label='Poziom'>
                        <option value="">Poziom</option>
                        <option value="JUNIOR">Junior</option>
                        <option value="MID">Mid</option>
                        <option value="SENIOR">Senior</option>
                    </select>
                </div>
                <div className={styles.search__row}>
                    <select className={styles.search__input} aria-label='Typ umowy'>
                        <option value="">Typ umowy</option>
                        <option value="TYMCZASOWA">Tymczasowa</option>
                        <option value="UMOWA_O_PRACE">Umowa o Pracę</option>
                        <option value="UMOWA_O_DZIELO">Umowa o dzieło</option>
                        <option value="UMOWA_ZLECENIE">Umowa zlecenie</option>
                        <option value="PRAKTYKI_ZAWODOWE">Praktyki zawodowe</option>
                        <option value="B2B">B2B</option>
                        <option value="STAZ">Staż</option>
                    </select>
                    <select className={styles.search__input} aria-label='Tryb pracy'>
                        <option value="">Tryb pracy</option>
                        <option value="STACJONARNIE">Stacjonarnie</option>
                        <option value="ZDALNIE">Zdalnie</option>
                        <option value="HYBRYDOWO">Hybrydowo</option>
                    </select>
                    <button onClick={() => setTechnologiesVisible(true)} className={styles.search__button} type='button'>Technologie</button>
                </div>
                <div className={styles.search__row}>
                    <input className={styles.search__input} aria-label='Płaca od' placeholder='Płaca od' type="number" min={0} />
                    <input className={styles.search__input} aria-label='Płaca do' placeholder='Płaca do' type="number" min={0} />
                    <button className={styles.search__button}>Wyszukaj</button>
                </div>
            </form>
            {
                technologiesVisible &&
                <div className={styles.search__technologies}>
                    {
                        technologies.map(technology => <button onClick={toggleTechnology} key={technology} className={`${styles.search__technology} ${technologiesChecked.includes(technology) && styles.search__technology_active}`}>{technology}</button>)
                    }
                    <button onClick={() => setTechnologiesVisible(false)} title='Zamknij' className={styles.search__close}>
                        <IoMdClose />
                    </button>
                </div>
            }
        </>
    )
}

export default Search
