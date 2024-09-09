import { formateDate} from "../../utils/formateDate";

const DoctorAbout = () => {
    return(
        <div>
            <div> 
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                About of
                <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                    Dr.Luia Essam
                </span>
                </h3>
                <p className="text-para">
                We are committed to helping you achieve a healthier, longer life with expert surgical care and personalized attention.
                </p>
        </div>

        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                Education
            </h3>

            <ul className="pt-4 md:p-5">
                <li className="flex flex-col sm:flex-row sm:justify-between sm: items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                            {formateDate("09-13-2014")} - {formateDate("03-13-2016")}
                        </span>
                    </div>
                </li>
            </ul>
        </div>


    )
};