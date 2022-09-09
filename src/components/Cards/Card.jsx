import React from 'react';
import { useState } from 'react';
import './Card.css';
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '53%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '550px',
        width: '380px',
        position: 'relative',
    },
};

export const Card = () => {
    const [file, setFile] = useState(null);
    const [data, setData] = useState(0.0);
    const [name, setName] = useState("");
    const [bounty_data, setBounty] = useState({});
    const [modalIsOpen, setIsOpen] = useState(false);

    Modal.defaultStyles.overlay.backgroundColor = 'transparent';

    // Modal functions
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleAPI = (jsonData) => {
        setData(0.0);
        setName("");
        setFile(null);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: jsonData,
        };

        fetch(
            "https://millenium-falcon.xyz/uploader", requestOptions)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setData(data['odds']);
                setBounty(data['data']);
                openModal();
            })
    }

    const submitData = () => {
        if (!file) {
            alert('Select file to submit');
            return;
        }
        handleAPI(file);
    }

    const setFileValue = (event) => {
        const fileReader = new FileReader();
        fileReader.readAsText(event.target.files[0], "UTF-8");
        setName(event.target.files[0].name);
        fileReader.onload = e => {
            setFile(JSON.parse(JSON.stringify(e.target.result)));
        };
    }

    return (
        <div className="card">
            <Modal
                className="modal"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Result Model"
            >
                <h2 className='txt'>Mission Details </h2>
                <h1 className='resultText'>Intercepted Data : </h1>

                <pre className='interdata'>{JSON.stringify(bounty_data, null, 4)}</pre>
                <div className='resultText'><span>Odds:&nbsp;&nbsp;</span><span className='num'>{data}%</span></div>
                <button onClick={closeModal} className="closeButton">close</button>

            </Modal>
            <h1 className='title'>Upload JSON</h1>
            <div>
                <input type="file" id="actual-btn" onChange={(event) => {
                    setFileValue(event)
                    event.target.value = null
                }} required accept="application/json" />
                <label htmlFor="actual-btn">{name !== "" ? name : "Choose File"}</label>
            </div>
            <div className="submitButton" onClick={() => submitData()}>Submit</div>
        </div>
    );
}