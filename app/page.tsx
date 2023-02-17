"use client";
import { useState } from "react";
import ReactTurntable from "../components/spinner";

const styles = {
	justifyContent: "center",
	alignContent: "center",
	display: "flex",
};
const prizes = [
	"Prize 1",
	"Prize 2",
    "Prize 3",
    "Prize 4",
    "Prize 5",
    "Prize 6",
    "Prize 7",
    "Prize 8",
    "Prize 9",

];

function play() {
	var audio = new Audio('/winner.mp3');
	audio.play();
}

const options = {
	prizes,
	width: 500,
	height: 500,
	primaryColor: "#83AF9B",
	secondaryColor: "#C8C8A9",
    tertiaryColor: "#000",
	fontStyle: {
		color: "#fff",
		size: "14px",
		fontVertical: true,
		fontWeight: "bold",
		fontFamily: "Microsoft YaHei",
	},
	speed: 1000,
	duration: 5000,
	clickText: "Click",
	onStart() {
		//If you want before the rotate do some...
		console.log("start...");
		//If you want stop rotate you can return false
		return true;
	},
	onComplete(prize) {
		console.log("prize:", prize);
		play();
	},
};




export default function Page() {
    const [winner, setWinner] = useState("");

	return (
		<div>
			<ReactTurntable
				{...options}
			/>
			
			<div
				className="winner"
				style={{
					visibility: winner ? "visible" : "hidden",
				}}
			>
				{winner}!!!
			</div>
		</div>
	);
}
