// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Title(props: any) {
	return (
		<div className="flex flex-col">
			<h1 className="text-lg font-bold">
				{props.titlePrincipal ?? "Titulo Padrão"}
			</h1>
			<h2 className="text-sm text-zinc-400">
				{props.titleSecundario}
			</h2>
		</div>
	)
}