import React from 'react';

function Newsletter() {
  return (
    <section className="w-full bg-[#F1F5FC] py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="font-inter font-semibold text-[28px] sm:text-[36px] md:text-[40px] leading-[100%] text-center align-middle text-[#000000] mb-4 sm:mb-6">
            Stay Updated
        </h2>
        
        {/* Subtitle */}
        <p className="font-inter font-normal not-italic text-[16px] sm:text-[16px] md:text-[16px] leading-[100%] align-middle text-center text-[#4A5565] mb-8 sm:mb-10 md:mb-12">
            Subscribe to receive the latest updates about DSAA 2026
        </p>
        
        {/* Email Form */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg md:max-w-none mx-auto items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="custom-email-input bg-white border border-[#E5E7EB] font-inter text-[#6A7282] focus:outline-none w-full sm:w-[320px] md:w-[456.7px] h-[48px] sm:h-[52px] md:h-[55.05px] rounded-[5px] md:rounded-[5.34px] px-4 md:px-[16.02px] py-3 md:py-[16.02px] text-[16px] sm:text-[17px] md:text-[18.7px]"
          />
          <button
            type="button"
            className="whitespace-nowrap inline-flex items-center justify-center box-border w-full sm:w-[120px] md:w-[129.05px] h-[48px] sm:h-[52px] md:h-[55.05px] px-4 md:px-[16.02px] py-3 md:py-[16.02px] bg-white rounded-[5px] md:rounded-[5.34px] cursor-pointer font-inter font-medium text-[16px] sm:text-[17px] md:text-[18.7px] leading-[100%] text-[#6A7282] border border-[#E5E7EB]"
          >
            Subscribe
          </button>

          <style>{`
            .custom-email-input::placeholder,
            .custom-email-input::-webkit-input-placeholder,
            .custom-email-input:-ms-input-placeholder,
            .custom-email-input::-ms-input-placeholder {
              font-family: Inter, sans-serif;
              font-weight: 500;
              font-style: normal;
              font-size: inherit;
              line-height: 100%;
              letter-spacing: 0;
              text-align: left;
              vertical-align: middle;
              color: #6A7282;
              opacity: 1;
            }

            /* Responsive placeholder font sizes */
            @media (max-width: 639px) {
              .custom-email-input::placeholder,
              .custom-email-input::-webkit-input-placeholder,
              .custom-email-input:-ms-input-placeholder,
              .custom-email-input::-ms-input-placeholder {
                font-size: 16px;
              }
            }

            @media (min-width: 640px) and (max-width: 767px) {
              .custom-email-input::placeholder,
              .custom-email-input::-webkit-input-placeholder,
              .custom-email-input:-ms-input-placeholder,
              .custom-email-input::-ms-input-placeholder {
                font-size: 17px;
              }
            }

            @media (min-width: 768px) {
              .custom-email-input::placeholder,
              .custom-email-input::-webkit-input-placeholder,
              .custom-email-input:-ms-input-placeholder,
              .custom-email-input::-ms-input-placeholder {
                font-size: 18.7px;
              }
            }

            /* remove any focus ring / shadow */
            .custom-email-input:focus {
              outline: none;
              box-shadow: none;
              -webkit-box-shadow: none;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
