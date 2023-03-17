export const serializers = {
    h1: (props: any) => (
        <h1 className="text-3xl font-bold my-5 font-titleFont"
            {...props}
        />
    ),
    h2: (props: any) => (
        <h2 className="text-2xl font-bold my-5 font-titleFont"
            {...props}
        />
    ),
    h3: (props: any) => (
        <h3 className="text-2xl font-bold my-5 font-titleFont"
            {...props}
        />
    ),
    li: ({ children }: any) => (
        <li className="ml-4 list-disc">{children}</li>
    ),
    link: ({ href, children }: any) => (
        <a href={href} className="text-cyan-500 hover:underline" target="_blank">
            {children}
        </a>
    )
}
