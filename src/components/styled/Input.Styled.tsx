import { FC, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
   position: relative;
   display: inline-block;
   padding-top: 6px;
   font-size: 16px;
   line-height: 1.5;
   overflow: hidden;

   /* Input, Textarea */
   & > input,
   & > textarea {
      box-sizing: border-box;
      margin: 0;
      border: solid 1px; /* Safari */
      border-color: rgba(0, 0, 0, 0.6);
      border-top-color: transparent;
      border-radius: 4px;
      padding: 15px 13px 15px;
      width: 100%;
      height: inherit;
      color: rgba(0, 0, 0, 0.87);
      background-color: transparent;
      box-shadow: none; /* Firefox */
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      caret-color: ${({ theme }) => theme.colors.primary};
      transition: border 0.2s, box-shadow 0.2s;
   }

   /* Span */
   & > input + span,
   & > textarea + span {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      border-color: rgba(0, 0, 0, 0.6);
      width: 100%;
      max-height: 100%;
      color: rgba(0, 0, 0, 0.6);
      font-size: 75%;
      line-height: 15px;
      cursor: text;
      transition: color 0.2s, font-size 0.2s, line-height 0.2s;
   }

   /* Corners */
   & > input + span::before,
   & > input + span::after,
   & > textarea + span::before,
   & > textarea + span::after {
      content: '';
      display: block;
      box-sizing: border-box;
      margin-top: 6px;
      border-top: solid 1px;
      border-top-color: rgba(0, 0, 0, 0.6);
      min-width: 10px;
      height: 8px;
      pointer-events: none;
      box-shadow: inset 0 1px transparent;
      transition: border-color 0.2s, box-shadow 0.2s;
   }

   & > input + span::before,
   & > textarea + span::before {
      margin-right: 4px;
      border-left: solid 1px transparent;
      border-radius: 4px 0;
   }

   & > input + span::after,
   & > textarea + span::after {
      flex-grow: 1;
      margin-left: 4px;
      border-right: solid 1px transparent;
      border-radius: 0 4px;
   }

   /* Hover */
   &:hover > input,
   &:hover > textarea {
      border-color: rgba(0, 0, 0, 0.87);
      border-top-color: transparent;
   }

   &:hover > input + span::before,
   &:hover > textarea + span::before,
   &:hover > input + span::after,
   &:hover > textarea + span::after {
      border-top-color: rgba(0, 0, 0, 0.87);
   }

   &:hover > input:not(:focus):placeholder-shown,
   &:hover > textarea:not(:focus):placeholder-shown {
      border-color: rgba(0, 0, 0, 0.87);
   }

   /* Placeholder-shown */
   & > input:not(:focus):placeholder-shown,
   & > textarea:not(:focus):placeholder-shown {
      border-top-color: rgba(0, 0, 0, 0.6);
   }

   & > input:not(:focus):placeholder-shown + span,
   & > textarea:not(:focus):placeholder-shown + span {
      font-size: inherit;
      line-height: 68px;
   }

   & > input:not(:focus):placeholder-shown + span::before,
   & > textarea:not(:focus):placeholder-shown + span::before,
   & > input:not(:focus):placeholder-shown + span::after,
   & > textarea:not(:focus):placeholder-shown + span::after {
      border-top-color: transparent;
   }

   /* Focus */
   & > input:focus,
   & > textarea:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      border-top-color: transparent;
      box-shadow: inset 1px 0 ${({ theme }) => theme.colors.primary},
         inset -1px 0 ${({ theme }) => theme.colors.primary},
         inset 0 -1px ${({ theme }) => theme.colors.primary};
      outline: none;
   }

   & > input:focus + span,
   & > textarea:focus + span {
      color: ${({ theme }) => theme.colors.primary};
   }

   & > input:focus + span::before,
   & > input:focus + span::after,
   & > textarea:focus + span::before,
   & > textarea:focus + span::after {
      border-top-color: ${({ theme }) => theme.colors.primary};
      box-shadow: inset 0 1px ${({ theme }) => theme.colors.primary};
   }

   /* Disabled */
   & > input:disabled,
   & > input:disabled + span,
   & > textarea:disabled,
   & > textarea:disabled + span {
      border-color: rgba(0, 0, 0, 0.38);
      border-top-color: transparent;
      color: rgba(0, 0, 0, 0.38);
      pointer-events: none;
   }

   & > input:disabled + span::before,
   & > input:disabled + span::after,
   & > textarea:disabled + span::before,
   & > textarea:disabled + span::after {
      border-top-color: rgba(0, 0, 0, 0.38);
   }

   & > input:disabled:placeholder-shown,
   & > input:disabled:placeholder-shown + span,
   & > textarea:disabled:placeholder-shown,
   & > textarea:disabled:placeholder-shown + span {
      border-top-color: rgba(0, 0, 0, 0.38);
   }

   & > input:disabled:placeholder-shown + span::before,
   & > input:disabled:placeholder-shown + span::after,
   & > textarea:disabled:placeholder-shown + span::before,
   & > textarea:disabled:placeholder-shown + span::after {
      border-top-color: transparent;
   }

   @media not all and (min-resolution: 0.001dpcm) {
      @supports (-webkit-appearance: none) {
         & > input,
         & > input + span,
         & > textarea,
         & > textarea + span,
         & > input + span::before,
         & > input + span::after,
         & > textarea + span::before,
         & > textarea + span::after {
            transition-duration: 0.1s;
         }
      }
   }
`
interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
   label: string
   multiline?: boolean
}
interface TextareaPropsType
   extends React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
   > {
   label: string
   multiline?: boolean
}
export const Input: FC<InputPropsType> = ({ label, ...rest }) => {
   return (
      <StyledLabel>
         <input placeholder=" " {...rest} />
         <span>{label}</span>
      </StyledLabel>
   )
}
export const Textarea: FC<TextareaPropsType> = ({ label, ...rest }) => {
   return (
      <StyledLabel>
         <textarea placeholder=" " {...rest} />
         <span>{label}</span>
      </StyledLabel>
   )
}
