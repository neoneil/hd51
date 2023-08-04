import React from "react";
import './PhoneticChart.scss'
import { useState } from "react";
// import { AiOutlineArrowLeft } from "react-icons/ai";
// import { IconContext } from "react-icons";
const PhoneticChart = () => {
    const backwards = '←';
    const [inputs, setInputs] = useState([]);
    const [examples, setExamples] = useState('');
    var pathvalue = '';
    var audio;


    const handleInput = (event) => {
        console.log(event.target.value);
        const value = event.target.value;
        setInputs(values => ([...values, value]));
        pathvalue = (`/mp3/${event.target.value}.mp3`);
        audio = new Audio(pathvalue)
        audio.play()
        if(event.target.value ==='ɪ')
        {
            setExamples('hit pick miss tip');
        }if(event.target.value ==='e')
        {
            setExamples('let neck mess wet');
        }
        if(event.target.value ==='æ')
        {
            setExamples('sat back hat cap');
        }if(event.target.value ==='ɒ')
        {
            setExamples('hot sock boss top');
        }if(event.target.value ==='ʌ')
        {
            setExamples('cut luck fuss cup');
        }if(event.target.value ==='ʊ')
        {
            setExamples('put look cook good');
        }if(event.target.value ==='ə')
        {
            setExamples('(schwa) apart pilot carrot minute');
        }if(event.target.value ==='iː')
        {
            setExamples('heat peak piece leak');
        }if(event.target.value ==='ɑː')
        {
            setExamples('start dark glass laugh');
        }if(event.target.value ==='uː')
        {
            setExamples('suit threw juice room');
        }if(event.target.value ==='ɔː')
        {
            setExamples('caught pork horse form');
        }if(event.target.value ==='ɜː')
        {
            setExamples('hurt work nurse sir');
        }
        
        if(event.target.value ==='aɪ')
        {
            setExamples('light like rice ripe');
        }if(event.target.value ==='eɪ')
        {
            setExamples('late lake race train');
        }if(event.target.value ==='ɔɪ')
        {
            setExamples('boy join choice noise');
        }if(event.target.value ==='aʊ')
        {
            setExamples('about found house down');
        }if(event.target.value ==='əʊ')
        {
            setExamples('note coke hose phone');
        }if(event.target.value ==='ɪə')
        {
            setExamples('hear near fear beer');
        }if(event.target.value ==='eə')
        {
            setExamples('hair share pear chair');
        }if(event.target.value ==='ʊə')
        {
            setExamples('tour lure cure pure');
        }if(event.target.value ==='θ' || event.target.value ==='ð')
        {
            setExamples('thin method both | then other with');
        }if(event.target.value ==='ʃ' || event.target.value ==='ʒ')
        {
            setExamples('show pushing rush | measure asia vision');
        }if(event.target.value ==='tʃ' || event.target.value ==='dʒ')
        {
            setExamples('chock watching catch | joke charging large');
        }
    }
    const clearInput = () => {
        setInputs(() => ([]));
        setExamples(() => ([]));

    }
    const backwardsInput = () => {
        setInputs(inputs.slice(0, -1));
    }

    return (
        <div className="container-fluid">
            <div className="row fw-normal">
                <h1>Phonetic Alphabet</h1>
            </div>
            <div className="row wrap">
                <div className=" showKeyPressed">{inputs}</div>
            </div>
            <div className="row blockStyle">
            <div className="examples">{examples}</div>
                <div className="mono">
                    <div className="inlineBlockVowels">
                        <button className="keyStyle" value={"iː"} onClick={e => handleInput(e, "value")} >iː</button>
                        <button className="keyStyle" value={"ɪ"} onClick={e => handleInput(e, "value")} >ɪ</button>
                        <button className="keyStyle" value={"ʊ"} onClick={e => handleInput(e, "value")} >ʊ</button>
                        <button className="keyStyle" value={"uː"} onClick={e => handleInput(e, "value")} >uː</button>
                    </div>
                    <div className="inlineBlockVowels">
                        <button className="keyStyle" value={"e"} onClick={e => handleInput(e, "value")} >e</button>
                        <button className="keyStyle" value={"ə"} onClick={e => handleInput(e, "value")} >ə</button>
                        <button className="keyStyle" value={"ɜː"} onClick={e => handleInput(e, "value")} >ɜː</button>
                        <button className="keyStyle" value={"ɔː"} onClick={e => handleInput(e, "value")} >ɔː</button>
                    </div>
                    <div className="inlineBlockVowels">
                        <button className="keyStyle" value={"æ"} onClick={e => handleInput(e, "value")} >æ</button>
                        <button className="keyStyle" value={"ʌ"} onClick={e => handleInput(e, "value")} >ʌ</button>
                        <button className="keyStyle" value={"ɑː"} onClick={e => handleInput(e, "value")} >ɑː</button>
                        <button className="keyStyle" value={"ɒ"} onClick={e => handleInput(e, "value")} >ɒ</button>
                    </div>
                </div>
                <div className="diph">
                    <div className="inlineBlockVowels">
                        <button className="keyStyle" value={"ɪə"} onClick={e => handleInput(e, "value")} >ɪə</button>
                        <button className="keyStyle" value={"eɪ"} onClick={e => handleInput(e, "value")} >eɪ</button>
                    </div>
                    <div className="inlineBlockVowels">
                        <button className="keyStyle" value={"ʊə"} onClick={e => handleInput(e, "value")} >ʊə</button>
                        <button className="keyStyle" value={"ɔɪ"} onClick={e => handleInput(e, "value")} >ɔɪ</button>
                        <button className="keyStyle" value={"əʊ"} onClick={e => handleInput(e, "value")} >əʊ</button>
                    </div>
                    <div className="inlineBlockVowels">
                        <button className="keyStyle" value={"eə"} onClick={e => handleInput(e, "value")} >eə</button>
                        <button className="keyStyle" value={"aɪ"} onClick={e => handleInput(e, "value")} >aɪ</button>
                        <button className="keyStyle" value={"aʊ"} onClick={e => handleInput(e, "value")} >aʊ</button>
                    </div>
                </div>
                <div className="consonants">
                    <div className="inlineBlockConsonants">
                        <button className="keyStyle" value={"p"} onClick={e => handleInput(e, "value")} >p</button>
                        <button className="keyStyle" value={"b"} onClick={e => handleInput(e, "value")} >b</button>
                        <button className="keyStyle" value={"t"} onClick={e => handleInput(e, "value")} >t</button>
                        <button className="keyStyle" value={"d"} onClick={e => handleInput(e, "value")} >d</button>
                        <button className="keyStyle" value={"tʃ"} onClick={e => handleInput(e, "value")} >tʃ</button>
                        <button className="keyStyle" value={"dʒ"} onClick={e => handleInput(e, "value")} >dʒ</button>
                        <button className="keyStyle" value={"k"} onClick={e => handleInput(e, "value")} >k</button>
                        <button className="keyStyle" value={"g"} onClick={e => handleInput(e, "value")} >g</button>
                    </div>
                    <div className="inlineBlockConsonants">
                        <button className="keyStyle" value={"f"} onClick={e => handleInput(e, "value")} >f</button>
                        <button className="keyStyle" value={"v"} onClick={e => handleInput(e, "value")} >v</button>
                        <button className="keyStyle" value={"θ"} onClick={e => handleInput(e, "value")} >θ</button>
                        <button className="keyStyle" value={"ð"} onClick={e => handleInput(e, "value")} >ð</button>
                        <button className="keyStyle" value={"s"} onClick={e => handleInput(e, "value")} >s</button>
                        <button className="keyStyle" value={"z"} onClick={e => handleInput(e, "value")} >z</button>
                        <button className="keyStyle" value={"ʃ"} onClick={e => handleInput(e, "value")} >ʃ</button>
                        <button className="keyStyle" value={"ʒ"} onClick={e => handleInput(e, "value")} >ʒ</button>
                    </div>
                    <div className="inlineBlockConsonants">
                        <button className="keyStyle" value={"m"} onClick={e => handleInput(e, "value")} >m</button>
                        <button className="keyStyle" value={"n"} onClick={e => handleInput(e, "value")} >n</button>
                        <button className="keyStyle" value={"ŋ"} onClick={e => handleInput(e, "value")} >ŋ</button>
                        <button className="keyStyle" value={"h"} onClick={e => handleInput(e, "value")} >h</button>
                        <button className="keyStyle" value={"l"} onClick={e => handleInput(e, "value")} >l</button>
                        <button className="keyStyle" value={"r"} onClick={e => handleInput(e, "value")} >r</button>
                        <button className="keyStyle" value={"w"} onClick={e => handleInput(e, "value")} >w</button>
                        <button className="keyStyle" value={"j"} onClick={e => handleInput(e, "value")} >j</button>
                    </div>
                </div>
                <div className="operation">
                    <button className="keyStyle" value={"ˈ"} onClick={e => handleInput(e, "value")} >ˈ</button>
                    <button className="keyStyle" onClick={e => clearInput(e, "value")} >𐄂</button>
                    <button className="keyStyle" onClick={e => backwardsInput(e, "value")} >{backwards}</button>
                    
                </div>
            </div>






            {/* <div className="row blockStyle">
                <div className="inlineBlockVowels">
                    <button className="keyStyle" value={"iː"} onClick={e => handleInput(e, "value")} >iː</button>
                    <button className="keyStyle" value={"ɪ"} onClick={e => handleInput(e, "value")} >ɪ</button>
                    <button className="keyStyle" value={"ʊ"} onClick={e => handleInput(e, "value")} >ʊ</button>
                    <button className="keyStyle" value={"uː"} onClick={e => handleInput(e, "value")} >uː</button>
                    <button className="keyStyle" value={"ɪə"} onClick={e => handleInput(e, "value")} >ɪə</button>
                    <button className="keyStyle" value={"eɪ"} onClick={e => handleInput(e, "value")} >eɪ</button>
                </div>
                <div className="inlineBlockVowels">
                    <button className="keyStyle" value={"e"} onClick={e => handleInput(e, "value")} >e</button>
                    <button className="keyStyle" value={"ə"} onClick={e => handleInput(e, "value")} >ə</button>
                    <button className="keyStyle" value={"ɜː"} onClick={e => handleInput(e, "value")} >ɜː</button>
                    <button className="keyStyle" value={"ɔː"} onClick={e => handleInput(e, "value")} >ɔː</button>
                    <button className="keyStyle" value={"ʊə"} onClick={e => handleInput(e, "value")} >ʊə</button>
                    <button className="keyStyle" value={"ɔɪ"} onClick={e => handleInput(e, "value")} >ɔɪ</button>
                    <button className="keyStyle" value={"əʊ"} onClick={e => handleInput(e, "value")} >əʊ</button>
                </div>
                <div className="inlineBlockVowels">
                    <button className="keyStyle" value={"æ"} onClick={e => handleInput(e, "value")} >æ</button>
                    <button className="keyStyle" value={"ʌ"} onClick={e => handleInput(e, "value")} >ʌ</button>
                    <button className="keyStyle" value={"ɑː"} onClick={e => handleInput(e, "value")} >ɑː</button>
                    <button className="keyStyle" value={"ɒ"} onClick={e => handleInput(e, "value")} >ɒ</button>
                    <button className="keyStyle" value={"eə"} onClick={e => handleInput(e, "value")} >eə</button>
                    <button className="keyStyle" value={"aɪ"} onClick={e => handleInput(e, "value")} >aɪ</button>
                    <button className="keyStyle" value={"aʊ"} onClick={e => handleInput(e, "value")} >aʊ</button>
                </div>
                <div className="inlineBlockConsonants">
                    <button className="keyStyle" value={"p"} onClick={e => handleInput(e, "value")} >p</button>
                    <button className="keyStyle" value={"b"} onClick={e => handleInput(e, "value")} >b</button>
                    <button className="keyStyle" value={"t"} onClick={e => handleInput(e, "value")} >t</button>
                    <button className="keyStyle" value={"d"} onClick={e => handleInput(e, "value")} >d</button>
                    <button className="keyStyle" value={"tʃ"} onClick={e => handleInput(e, "value")} >tʃ</button>
                    <button className="keyStyle" value={"dʒ"} onClick={e => handleInput(e, "value")} >dʒ</button>
                    <button className="keyStyle" value={"k"} onClick={e => handleInput(e, "value")} >k</button>
                    <button className="keyStyle" value={"g"} onClick={e => handleInput(e, "value")} >g</button>
                </div>
                <div className="inlineBlockConsonants">
                    <button className="keyStyle" value={"f"} onClick={e => handleInput(e, "value")} >f</button>
                    <button className="keyStyle" value={"v"} onClick={e => handleInput(e, "value")} >v</button>
                    <button className="keyStyle" value={"θ"} onClick={e => handleInput(e, "value")} >θ</button>
                    <button className="keyStyle" value={"ð"} onClick={e => handleInput(e, "value")} >ð</button>
                    <button className="keyStyle" value={"s"} onClick={e => handleInput(e, "value")} >s</button>
                    <button className="keyStyle" value={"z"} onClick={e => handleInput(e, "value")} >z</button>
                    <button className="keyStyle" value={"ʃ"} onClick={e => handleInput(e, "value")} >ʃ</button>
                    <button className="keyStyle" value={"ʒ"} onClick={e => handleInput(e, "value")} >ʒ</button>
                </div>
                <div className="inlineBlockConsonants">
                    <button className="keyStyle" value={"m"} onClick={e => handleInput(e, "value")} >m</button>
                    <button className="keyStyle" value={"n"} onClick={e => handleInput(e, "value")} >n</button>
                    <button className="keyStyle" value={"ŋ"} onClick={e => handleInput(e, "value")} >ŋ</button>
                    <button className="keyStyle" value={"h"} onClick={e => handleInput(e, "value")} >h</button>
                    <button className="keyStyle" value={"l"} onClick={e => handleInput(e, "value")} >l</button>
                    <button className="keyStyle" value={"r"} onClick={e => handleInput(e, "value")} >r</button>
                    <button className="keyStyle" value={"w"} onClick={e => handleInput(e, "value")} >w</button>
                    <button className="keyStyle" value={"j"} onClick={e => handleInput(e, "value")} >j</button>
                </div>
            </div> */}
        </div>
    );
}

export default PhoneticChart;