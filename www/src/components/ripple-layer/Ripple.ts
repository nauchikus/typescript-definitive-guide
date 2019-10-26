import { CSSProperties } from "react";

export interface IPoint {
  x: number;
  y: number;
}
export interface IRectangle {
  top: number;
  right: number;
  bottom:number;
  left: number;
}

export interface ICreateRippleModelParams {
  isFromCenter:boolean;
  width:number;
  height:number;

  bg: string;

  position: IPoint;
}

export type RippleModel=ReturnType<typeof Ripple.createRippleModel>;

export class Ripple {
  private static count = 0;
  static generateRippleUid(){
    return (Ripple.count++).toString();
  }
  static generateRippleUiUid(){
    return `ripple_ui_${Ripple.count++}`;
  }

  private static getCenterPosition ( width:number, height:number ) {
    return {
      x: width / 2,
      y: height / 2
    };
  }

  private static createNormalizeRectangle ( width:number, height:number ) {
    return { top: 0, right: width, bottom: height, left: 0 };
  }

  private static getRippleDiagonal ( { top, right, bottom, left }:IRectangle, { x, y }:IPoint ) {
    let radius = Math.max(
      Math.sqrt( ( x - left ) ** 2 + ( y - top ) ** 2 ),
      Math.sqrt( ( x - right ) ** 2 + ( y - top ) ** 2 ),
      Math.sqrt( ( x - right ) ** 2 + ( y - bottom ) ** 2 ),
      Math.sqrt( ( x - left ) ** 2 + ( y - bottom ) ** 2 )
    );
    let diagonal = radius * 2;

    return diagonal;
  }
  public static createRippleModel ( { isFromCenter,width, height, bg = `rgba(0,0,0,.2)`, position }:ICreateRippleModelParams ) {
    if ( isFromCenter ) {
      position = Ripple.getCenterPosition( width, height );
    }

    let rectangle = Ripple.createNormalizeRectangle( width, height );
    let diagonal = Ripple.getRippleDiagonal( rectangle, position );

    let x = position.x - diagonal / 2;
    let y = position.y - diagonal / 2;

    let style:CSSProperties = {
      width: `${ diagonal }px`,
      height: `${ diagonal }px`,

      borderRadius: `50%`,

      backgroundColor: bg,

      position: `absolute`,
      left: `${ x }px`,
      top: `${ y }px`,

      pointerEvents: `none`,

      animation: `ripple .4s`


    };

    let id = Ripple.generateRippleUid();


    return { style, id };
  }
}