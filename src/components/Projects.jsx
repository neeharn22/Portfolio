import React from 'react'
import UtilityMethods from '../util/UtilityMethods'
import Sentiment from '../assets/sentiment.jpg'
import Airbnb from '../assets/airbnb.png'
import Amazon from '../assets/amazon.png'
import Multilingual from '../assets/multilingual.jpg'
import NikeAdidas from '../assets/nikeadidas.jpg'
import Starcraft from '../assets/sc.jpg'
import Insurance from '../assets/insurance.jpg'
import TextAnalysis from '../assets/textanalysis.png'
import Momentum from '../assets/momentum.jpg'

const Projects = () => {
    return (
        <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#2a198b]'>
            <div className='max-w-[1400px] mx-auto p-8 md:p-4 lg:p-4 xl:p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                    <p className='py-6'>Hover over each column for more details about each project.</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Momentum})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Momentum Trading
                            </span>
                            <div className='pt-8 text-center'>
                                <div onClick={() => UtilityMethods.handleURLClick('https://github.com/neeharn22/Portfolio/tree/main/projects/momentum_trading')}>
                                    <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Airbnb})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider text-center'>
                                Airbnb Preprocessing
                            </span>
                            <div className='pt-8 text-center flex justify-center'>
                                <div onClick={() => UtilityMethods.handleURLClick('https://neehar-namjoshi-portfolio.s3.amazonaws.com/misc_assets/western_australia.pdf')}>
                                    <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Report</button>
                                </div>
                                <div onClick={() => UtilityMethods.handleURLClick('https://github.com/neeharn22/Portfolio/tree/main/projects/airbnb_preprocessing')}>
                                    <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Amazon})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider text-center'>
                                Amazon Sales Forecasting
                            </span>
                            <div className='pt-8 text-center flex justify-center'>
                                <div onClick={() => UtilityMethods.handleURLClick('https://neehar-namjoshi-portfolio.s3.amazonaws.com/misc_assets/amazon_sales_forecasting_project.pdf')}>
                                    <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Report</button>
                                </div>
                                <div onClick={() => UtilityMethods.handleURLClick('https://github.com/neeharn22/Portfolio/tree/main/projects/amazon_forecasting')}>
                                    <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Insurance})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Insurance Fraud Detection
                            </span>
                            <div className='pt-8 text-center'>
                                <div onClick={() => UtilityMethods.handleURLClick('https://github.com/neeharn22/Portfolio/tree/main/projects/insurance_fraud_detection')}>
                                    <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${TextAnalysis})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                AI Generated Text Detection
                            </span>
                            <div className='pt-8 text-center'>
                                <div onClick={() => UtilityMethods.handleURLClick('https://github.com/neeharn22/Portfolio/tree/main/projects/ai-generated_text_detection')}>
                                    <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Sentiment})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Text Mining Sentiment Analysis
                            </span>
                            <div className='pt-8 text-center flex justify-center'>
                                <div onClick={() => UtilityMethods.handleURLClick('https://neehar-namjoshi-portfolio.s3.amazonaws.com/misc_assets/text_mining_project.pdf')}>
                                    <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Report</button>
                                </div>
                                <div onClick={() => UtilityMethods.handleURLClick('https://github.com/neeharn22/Portfolio/tree/main/projects/text_mining_sentiment_analysis')}>
                                    <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Starcraft})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Starcraft 2 Winrate Factors
                            </span>
                            <div className='pt-8 text-center flex justify-center'>
                                <div onClick={() => UtilityMethods.handleURLClick('https://neehar-namjoshi-portfolio.s3.amazonaws.com/misc_assets/starcraft2.pdf')}>
                                    <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Report</button>
                                </div>
                                <div onClick={() => UtilityMethods.handleURLClick('https://github.com/neeharn22/Portfolio/tree/main/projects/starcraft2')}>
                                    <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Multilingual})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Monarch Tourism Company
                            </span>
                            <div className='pt-8 text-center flex justify-center'>
                                <div onClick={() => UtilityMethods.handleURLClick('https://neehar-namjoshi-portfolio.s3.amazonaws.com/misc_assets/monarch_tourism_report.pdf')}>
                                    <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Report</button>
                                </div>
                                <div onClick={() => UtilityMethods.handleURLClick('https://github.com/neeharn22/Portfolio/tree/main/projects/monarch_tourism_company')}>
                                    <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${NikeAdidas})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Nike Adidas Image Recognition
                            </span>
                            <div className='pt-8 text-center'>
                                <div onClick={() => UtilityMethods.handleURLClick('https://github.com/neeharn22/Portfolio/tree/main/projects/nike_adidas_image_recognition')}>
                                    <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects