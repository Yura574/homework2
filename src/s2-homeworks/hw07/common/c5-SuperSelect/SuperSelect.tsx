import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
    options,
    className,
    onChange,
    // value,
    onChangeOption,
    ...restProps
}) => {
    const mappedOptions: any[] = options
        ? options.map((o) => (
              <option
                  id={'hw7-option-' + o.id}
                  className={s.option}
                  key={o.id}
                  value={o.value}
              >
                  {o.value}
              </option>
          ))
        : [] // map options with key
    // console.log(typeof value)
    // console.log( value)
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // делают студенты
        console.log(e.target.value)
        const option = options?.find(el=> el.value === e.target.value)
        onChangeOption?.(option.id)
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')
    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
