import React from "react";
import { AlertCircle, Clock } from "lucide-react";

const deadlines = [
	{
		icon: <AlertCircle className="text-[#FF3B3B] w-6 h-6" />,
		title: "Submission",
		subtitle: "",
		date: "To be announced",
		color: "#155DFC",
		border: "border-[#155DFC]",
		dateColor: "text-[#155DFC]",
	},
	{
		icon: <Clock className="text-[#155DFC] w-6 h-6" />,
		title: "Notification",
		subtitle: "",
		date: "To be announced",
		color: "#155DFC",
		border: "border-[#155DFC]",
		dateColor: "text-[#155DFC]",
	},
];

function DeadLines() {
	return (
		<section className="w-full bg-white py-10 px-4 sm:py-16 sm:px-6">
			<div className="max-w-[1250px] mx-auto">
				<h2 className="font-inter font-bold text-[32px] md:text-[40px] text-center text-[#101828] mb-2">
					Deadlines
				</h2>
				<div className="text-center text-[#232B3A] font-inter text-[16px] mb-10">
					(23:59 AOE)
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{deadlines.map((item, idx) => (
						<div
							key={idx}
							className="rounded-xl bg-white p-6 flex flex-col gap-2 min-h-[120px] md:min-h-[150px]"
							style={{
								borderStyle: "solid",
								borderColor: "#155DFC",
								borderWidth: "1.34px 1.34px 1.34px 5.34px",
							}}
						>
							<div className="flex items-center gap-2 mb-2">
								{item.icon}
								<span className="font-inter font-semibold text-[18px] md:text-[20px] text-[#232B3A]">
									{item.title}
								</span>
							</div>
							{item.subtitle && (
								<div className="font-inter text-[14px] text-[#818181] mb-1">
									{item.subtitle}
								</div>
							)}
                            <div className="font-inter font-medium text-[18px] md:text-[24px] leading-[27px] tracking-normal align-middle text-[#155DFC]">
                                {item.date}
                            </div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default DeadLines;
