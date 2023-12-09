const SectionTitle = ({headings,subHeading}) => {
    return (
        <div className="w-1/3 mx-auto">
            <p className="text-[#D99904] text-base mb-4 text-center">{subHeading}</p>
        
            <h3 className="text-3xl text-center border-y-4 py-4 mt-4 mb-10">{headings}</h3>
        </div>
    );
};

export default SectionTitle;