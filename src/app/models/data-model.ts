// There is the interfaces 'for header'.
export interface MenuModel {
    id: number;
    icon: string;
    menuList: ListModel[];
}

export interface ListModel {
    id: number;
    text: string;
    path: string;
}

// There is the interfaces for 'footer'.
export interface FooterModel {
    id: number;
    icon: string;
    text: string;
    icons: Icon[];
}

export interface Icon {
    id: number;
    icon: string;
    text: string;
}

// There is the interfaces for 'contact'.
export interface ContactModel {
    id: number;
    title: string;
    icons: Icon[]
}

// There is the interfaces for 'about'.
export interface AboutModel {
    id: number;
    title: string;
    text: string;
    images: Image[]
}

export interface Image {
    id: number;
    image: string;
}

// There is the interfaces for 'questions' and 'page404'
export interface QuestionModel {
    id: number,
    title: string,
    btn_text: string,
    text: string,
    image: string
}

// There is the interfaces for 'slider'
export interface SliderModel {
    id: number,
    title: string,
    images: Image[]
}

// There is the interfaces for 'price list'
export interface PriceModel {
    id: number,
    title: string,
    slider: Image[]
}

// There is the interfaces for 'wood types'
export interface WoodModel {
    id: number,
    title: string,
    categories: Woods[]
}

export interface Woods {
    id: number,
    image: string,
    subtitle: string,
    properties: Property[]
}

export interface Property {
    id: number,
    text: string,
    icon: string
}


// There is the interfaces for 'home-solid' and 'advantages'
export interface SolidModel {
    id: number;
    title: string;
    text: string;
    btn_text: string;
    images: Image[]
}

export interface AdvantagesModel {
    id: number;
    title: string;
    image: string;
    btn_text: string,
    texts: Text[]
}

export interface Text {
    id: number,
    text: string
}


