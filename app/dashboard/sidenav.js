"use client";
import PropTypes from "prop-types";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
export function Sidenav({ routes }) {
  return (
    <div className="hidden xl:block fixed bg-black z-50 my-10 mx-10 ml-10 h-[calc(100vh-70px)] w-72 rounded-[28px]">
    <div className="py-6 px-8 flex flex-col justify-between h-full"> {/* Use flex to align content */}
      <div>
        <div className="flex items-center gap-4 py-6 px-8">
          <Typography className="text-4xl font-semibold" color="white">
            Board.
          </Typography>
        </div>

        <div className="m-4">
          {routes.map(({ pages }, key) => (
            <ul key={key} className="mb-[20px] flex flex-col gap-1 font-montserrat text-lg">
              {pages.map(({ icon, name }) => (
                <li key={name}>
                  <Button className="flex items-center gap-4 px-4 capitalize bg-black" fullWidth>
                    {icon}
                    <Typography color="inherit" className="font-medium capitalize">
                      {name}
                    </Typography>
                  </Button>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="py-6 px-8 text-white text-sm font-montserrat">
        <p className="mb-2">Help</p>
        <p>Contact Us</p>
      </div>
    </div>
  </div>

  );
}

Sidenav.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
