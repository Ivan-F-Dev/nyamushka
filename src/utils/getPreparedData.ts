import {CardProps} from "../components/Card/Card";

interface IOutput {
    topTitle:string
    mainTitle:string
    flavorTitle:string
    subTitle1:string
    subTitle2:string
    subTitle3:string
    weight:string
    footer:string
    footerLink:string
}

export const getPreparedData = (p:CardProps,clicked:boolean,hovered:boolean,disabled:boolean):IOutput => {

    let data:typeof p.defaultInfo|typeof p.selectedInfo|typeof p.disabledInfo|typeof p.selectedHoverInfo

    if (disabled) {
        data = p.disabledInfo
    } else if (clicked && hovered) {
        data = p.selectedHoverInfo
    } else if (clicked) {
        data = p.selectedInfo
    } else {
        data = p.defaultInfo
    }

    const topTitle = data.topTitle
    const mainTitle = data.mainTitle
    const flavorTitle = data.flavorTitle

    const subTitle = data.subTitle.split(" ")
    const subTitle1 = subTitle.slice(0,2).join(' ')
    const subTitle2 = subTitle.slice(2,6).join(' ')
    const subTitle3 = subTitle.slice(6,subTitle.length).join(' ')

    const weight = data.weight
    const footer = data.footer
    const footerLink = data.footerLink

    return {topTitle,mainTitle,flavorTitle,subTitle1,subTitle2,subTitle3,weight,footer,footerLink}

}