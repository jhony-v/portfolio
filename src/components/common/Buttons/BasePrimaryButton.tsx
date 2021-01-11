import React from 'react'

type BasePrimaryButtonProps = {
    children ?: React.ReactNode;
    onClick ?: () => void;
}
export default function BasePrimaryButton({children,onClick}:BasePrimaryButtonProps) {
    return (
        <button className="rounded-3xl pt-3 pb-3 pl-7 pr-7 text-white bg-purple-700 font-bold text-sm " onClick={onClick}>
            {children}
        </button>
    )
}
