import React from 'react';
import AddressCard from "./components/AddressCard.jsx";
import {ImageTextFilledButton} from "./components/buttons.jsx";


const Contact = () => {

    const addresses = [
        {
            id: 1,
            title: "Address:",
            desc: "Mymensingh, 30/1 CK",
            selected: true
        },
        {
            id: 2,
            title: "My Email:",
            desc: "mymail@mail.com",
            selected: false
        },
        {
            id: 3,
            title: "Call Me Now:",
            desc: "00-1234 00000",
            selected: false
        }
    ]

    const inputClass = "border-b-2 border-gray-200 p-1"
    return (
        <>

            <div className="container bg-gray-100 relative h-152">
                <div className=" bg-white absolute top-0 rounded-lg z-10  flex gap-12  p-16 shadow-lg  h-168"
                     style={{width: 'calc(100vw - 400px)'}}>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-3xl">Let’s discuss your Project</h1>
                            <p>There are many variations of passages of Lorem Ipsu available. but the majority have
                                suffered
                                alte.</p>
                        </div>
                        <div className="flex flex-col gap-8">
                            {
                                addresses.map((address, index) => (
                                    <div>
                                        <AddressCard address={address} key={index}/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex gap-6 pt-12">
                            <div className=" flex items-center justify-center bg-fuchsia-600 w-8 h-8">
                                <img src="/contact/facebook.png" alt=""/>
                            </div>
                            <div className=" flex items-center justify-center bg-white w-8 h-8">
                                <img src="/contact/world.png" alt=""/>
                            </div>
                            <div className=" flex items-center justify-center bg-white w-8 h-8">
                                <img src="/contact/be.png" alt=""/>
                            </div>
                            <div className=" flex items-center justify-center bg-white w-8 h-8">
                                <img src="/contact/world.png" alt=""/>
                            </div>
                            <div className=" flex items-center justify-center bg-white w-8 h-8">
                                <img src="/contact/linkedin.png" alt=""/>
                            </div>

                        </div>

                    </div>
                    <div className="flex flex-col gap-6">
                        <p>There are many variations of passages of Lorem Ipsu available,
                            but the majority have suffered alte.
                        </p>

                        <form className="flex flex-col gap-6">
                            <input type="text" placeholder="Name*" className={inputClass}/>
                            <input type="text" placeholder="Email*" className={inputClass}/>
                            <input type="text" placeholder="Location*" className={inputClass}/>
                            <div className="flex gap-6">
                                <input type="text" placeholder="Budget*" className={inputClass}/>
                                <input type="text" placeholder="Subject*" className={inputClass}/>
                            </div>
                            <input type="text" placeholder="Message*" className={inputClass}/>
                            <div>
                                <ImageTextFilledButton title="Submit"/>
                            </div>

                        </form>

                    </div>
                </div>

            </div>

        </>
    );
};

export default Contact;