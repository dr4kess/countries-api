import s from './Spinner.module.scss'

const Spinner = () => {
    return (
        <div className={s.loaderWrapper}>
            <span className={s.loader}></span>
        </div>
    )
}

export default Spinner;