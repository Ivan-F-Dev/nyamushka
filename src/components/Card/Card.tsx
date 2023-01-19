import React, {FC} from 'react'
import s from './Card.module.scss'
import catimg from "../../assets/img/cat.jpg"

interface Props {

};

const Card: FC<Props> = (props) => {
    return (
        <div className={s.Card__container}>
            <div className={s.Card__wrapper}>
                <div className={s.Card__info}>
                    <h3 className={s.Card__topTitle}>Сказочное заморское яство</h3>
                    <h1 className={s.Card__mainTitle}>Нямушка</h1>
                    <h2 className={s.Card__flavorTitle}>с фуа-гра</h2>
                    <div className={s.Card__subTitle}>10 порций мышь в подарок</div>
                </div>
                <img className={s.Card__img} src={catimg} alt="cat"/>
                <div className={s.Card__weigth}>
                    <div>0,5</div>
                    <div>кг</div>
                </div>
            </div>
            <div className={s.Card__footer}>
                <span>Чего сидишь? Порадуй котэ,</span>
                <a href="">купи</a>
                <span>.</span>
            </div>
        </div>
    )
}

export default Card