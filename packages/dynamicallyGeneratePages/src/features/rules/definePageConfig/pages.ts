import {PageStyle} from "./page.style";

export interface pages {
    /**
     *
     * 用户端该字段可不填
     *
     * @public
     */
    path: string
    style?: Partial<PageStyle>
}
