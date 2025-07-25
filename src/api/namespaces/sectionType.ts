import type { ReactNode } from "react";

export type SectionProps = {
    children?: ReactNode;
    className?: string;
    id?: string;
    dataSection?: string;
    hasRow?: boolean;
    hasContainer?: boolean;
};