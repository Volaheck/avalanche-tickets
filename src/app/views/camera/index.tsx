import { useRef, useEffect, useState } from "react";
import { Video, CameraWrapper } from "./styled";

export const Camera = () => {
	console.log("test");
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isCameraOpen, setIsCameraOpen] = useState(false);

	const openCamera = async (facingMode: "environment" | "user") => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				video: { facingMode: { exact: facingMode } },
			});
			if (videoRef.current) {
				videoRef.current.srcObject = stream;
			}
			setIsCameraOpen(true);
		} catch (err) {
			if (facingMode === "environment") {
				// Если задняя камера недоступна, переключаемся на фронтальную
				console.warn("Rear camera not found, switching to front camera.");
				openCamera("user");
			} else {
				console.error("Error accessing the camera: ", err);
			}
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
		!isCameraOpen && openCamera("environment");
		return () => {
			closeCamera();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<CameraWrapper>
			<Video ref={videoRef} autoPlay playsInline />
		</CameraWrapper>
	);
};
