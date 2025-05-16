import React from "react";

export const ProgramComponent = () => {
	return (
		<div className="p-4 m-8 bg-white text-center font-serif">
			<div className="header-subtitle capitalize text-3xl text-black font-serif font-bold">
				Programa
			</div>
			<p>21 de marzo, 2026</p>
			<hr className="divider mt-6 mb-6" />
			<div className="grid gap-4 grid-cols-1 md:grid-cols-3">
				<div className="image-container mx-auto my-4 w-full aspect-[16/9]
				bg-[url(/images/balcony.jpg)] bg-contain bg-center bg-no-repeat">
				</div>
				<div className="md:col-span-2 flex flex-col space-y-4">
					<div className="flex flex-col gap-y-8">
						<div className="flex flex-row">
							<div className="basis-1/3 text-right font-bold">4:30 p.m.</div>
							<div className="basis-2/3">Ceremonia</div>
						</div>
						<div className="flex flex-row">
							<div className="basis-1/3 text-right">5:30 p.m.</div>
							<div className="basis-2/3">Peda numero 1</div>
						</div>
						<div className="flex flex-row">
							<div className="basis-1/3 text-right">6:30 p.m.</div>
							<div className="basis-2/3">Cenar</div>
						</div>
						<div className="flex flex-row">
							<div className="basis-1/3 text-right">7:30 p.m.</div>
							<div className="basis-2/3">Fieston con perreo</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}