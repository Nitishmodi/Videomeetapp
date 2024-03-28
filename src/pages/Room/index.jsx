import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import './roompage.css'; 

const RoomPage = () => {
    const { roomId } = useParams();
    const meetingContainer = useRef(null);

    useEffect(() => {
        if (meetingContainer.current) {
            myMeeting(meetingContainer.current);
        }
    }, []);

    const myMeeting = async (element) => {
        const appID = 1554314061;
        const serverSecret = "505bb165ffd9238d093c56455bc63eb6";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Nitish Modi"
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `http://localhost:3000/room/${roomId}`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true,
        });
    };

    return (
        <div className="room-container">
            <div ref={meetingContainer} className="meeting-container" />
        </div>
    );
};

export default RoomPage;
