import React from 'react'
import bottomIcon from './bottom.svg'
import topIcon from './top.svg'

// добавить в проект иконки и импортировать
const downIcon = bottomIcon
const upIcon = topIcon
const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

    if (sort === '') return down
    if (sort === down) return up
    if (sort === up) return ''
return ''
    // return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    // console.log('sorts', sort)
    const up = '0' + value
    const down = '1' + value


    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >

            {/*сделать иконку*/}
            {sort === '' ? <span style={{display: 'flex', flexDirection: 'column', width: '8px'}}>
                <img src={topIcon} alt=""/>
                <img src={bottomIcon} alt=""/>
            </span>
                : <img
                    id={id + '-icon-' + sort}
                    src={icon}
                    alt={'sort'}
                />}


            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
