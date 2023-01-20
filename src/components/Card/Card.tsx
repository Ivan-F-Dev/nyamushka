import React, {FC, useState} from 'react'
import s from './Card.module.scss'
import catimg from "../../assets/img/cat.jpg"
import {getPreparedData} from "../../utils/getPreparedData";

export interface CardProps {
    disabled:boolean
    defaultInfo: {
        topTitle: string
        mainTitle: string
        flavorTitle: string
        subTitle: string
        weight: string
        footer: string
        footerLink: string
    }
    selectedInfo: {
        topTitle: string
        mainTitle: string
        flavorTitle: string
        subTitle: string
        weight: string
        footer: string
        footerLink: string
    }
    selectedHoverInfo: {
        topTitle: string
        mainTitle: string
        flavorTitle: string
        subTitle: string
        weight: string
        footer: string
        footerLink: string
    }
    disabledInfo: {
        topTitle: string
        mainTitle: string
        flavorTitle: string
        subTitle: string
        weight: string
        footer: string
        footerLink: string
    }
};
const Card: FC<CardProps> = (props) => {

    const [clicked,setClicked] = useState(false)
    const [hover,setHover] = useState(false)

    const {topTitle, mainTitle, flavorTitle, subTitle1, subTitle2, subTitle3, weight, footer, footerLink} = getPreparedData(props,clicked,hover,props.disabled)

    const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>| React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        setHover(false)
        setClicked((prev) => !prev)
    }

    const onEnter = () => {
        if (clicked) {
            setHover(true)
        }
    }
    const onLeave = () => {
        setHover(false)
    }

    return (
        <div  className={s.Card__container}>
            <div className={`${s.Card__wrapper} ${props.disabled && s.Card__wrapper_disabled || clicked && s.Card__wrapper_selected}`}
                onClick={onClick} onMouseEnter={onEnter} onMouseLeave={onLeave}
            >
                {props.disabled && <div className={s.Card__wrapperDisabled}></div>}
                <div className={s.Card__info}>
                    <h3 className={`${s.Card__topTitle} ${hover && s.Card__topTitle_hovered}`}>{topTitle}</h3>
                    <h1 className={s.Card__mainTitle}>{mainTitle}</h1>
                    <h2 className={s.Card__flavorTitle}>{flavorTitle}</h2>
                    <div className={s.Card__subTitle}>{subTitle1}</div>
                    <div className={s.Card__subTitle}>{subTitle2}</div>
                    <div className={s.Card__subTitle}>{subTitle3}</div>
                </div>
                <img className={s.Card__img} src={catimg} alt="cat"/>
                <div className={`${s.Card__weight} ${props.disabled && s.Card__weight_disabled || clicked && s.Card__weight_selected}`}>
                    <div>{weight}</div>
                    <div>кг</div>
                </div>
            </div>
            <div className={`${s.Card__footer} ${props.disabled && s.Card__footer_disabled}`}>
                <span>{footer}</span>
                {(!clicked && !hover && !props.disabled) && <a onClick={onClick} href="">{footerLink}</a>}
                {(!clicked && !hover && !props.disabled) && <span className={s.dot}>.</span>}
            </div>
        </div>
    )
}

export default Card