// Camera.tsx
import React, { useRef, useEffect, useState } from "react";

export const Camera = () => {
	console.log("test");
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isCameraOpen, setIsCameraOpen] = useState(false);

	const openCamera = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ video: true });
			if (videoRef.current) {
				videoRef.current.srcObject = stream;
			}
			setIsCameraOpen(true);
		} catch (err) {
			console.error("Error accessing the camera: ", err);
		}
	};

	const closeCamera = () => {
		const stream = videoRef.current?.srcObject as MediaStream;
		const tracks = stream?.getTracks();

		tracks?.forEach((track) => {
			track.stop();
		});

		if (videoRef.current) {
			videoRef.current.srcObject = null;
		}

		setIsCameraOpen(false);
	};

	useEffect(() => {
		!isCameraOpen && openCamera();
		return () => {
			closeCamera();
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<video
				ref={videoRef}
				autoPlay
				playsInline
				style={{ width: "100%", height: "auto" }}
			/>
		</div>
	);
};
