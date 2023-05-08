import "./App.css";
import MobileMenu from "./components/MobileMenu";
import {
	facebook,
	logo,
	twitter,
	pinterest,
	instagram,
	mobileHero,
	desktopHero,
	people,
	waves,
	snappy,
	affordable,
	waves2,
	waves3,
} from "./images";

function App() {
	return (
		<div className="App">
			<div>
				<img
					src={waves}
					alt="waves"
					className="absolute right-0 top-[1100px] w-[35%] lg:hidden"
				/>
				<img
					src={waves2}
					alt="desktop left waves"
					className="hidden lg:block lg:absolute lg:left-0 lg:top-[32rem] lg:w-[10%]"
				/>
				<img
					src={waves3}
					alt="desktop right waves"
					className="hidden lg:block lg:absolute lg:right-0 lg:w-[20%] lg:top-[6rem] lg:z-10"
				/>
			</div>
			<header className="flex items-center justify-between p-8 lg:p-6 lg:justify-between lg:flex">
				<img src={logo} alt="logo" className="lg:ml-28" />
				<MobileMenu className="lg:hidden" />
				<ul className=" hidden lg:flex gap-12 items-center mr-24">
					<li className="hover:text-darkviolet text-grayviolet uppercase hover:cursor-pointer font-bold ">
						How We Work
					</li>
					<li className="hover:text-darkviolet text-grayviolet uppercase hover:cursor-pointer font-bold">
						Blog
					</li>
					<li className="hover:text-darkviolet text-grayviolet uppercase hover:cursor-pointer font-bold">
						Account
					</li>
					<button className=" border-2 border-black p-2 uppercase font-bold tracking-wider hover:bg-violet hover:text-white hover:cursor-pointer hover:border-violet">
						View Plans
					</button>
				</ul>
			</header>
			<main className="bg-white lg:w-[100%]">
				{/* HERO INTRO IMG */}
				<img
					src={mobileHero}
					alt="mobile hero"
					className="block lg:hidden w-[100%]"
				/>

				<img
					src={desktopHero}
					alt="Desktop Hero"
					className="hidden lg:absolute lg:block lg:right-[120px] lg:bottom-[50px]"
				/>
				{/* Main Container */}
				<div className="bg-violet waves mx-auto flex flex-col items-center justify-center  py-28 lg:text-left ">
					{/* Desktop Container */}
					<div className="lg:w-[80%] lg:flex lg:flex-col lg:text-left">
						<hr className="hidden lg:w-[12%] lg:border-white lg:block lg:mb-12" />
						<h1 className="text-white font-medium text-5xl  w-[90%] lg:text-6xl lg:w-[35%] mx-auto lg:mx-0">
							{" "}
							Humanizing <br className="lg:hidden" /> your insurance.
						</h1>
						<p className="mt-6 text-white leading-8 tracking-wide text-lg w-[75%] mx-auto lg:mx-0 lg:w-[52%] ">
							{" "}
							Get your life insurance coverage easier and faster. We blend our
							expertise and technology to help you find the plan that’s right
							for you. Ensure you and your loved ones are protected.
						</p>
						<button className="mt-12 border-2 border-white text-white p-2 w-[30%] uppercase font-bold tracking-wider lg:w-[20%] hover:bg-white hover:text-violet">
							View Plans
						</button>
					</div>
				</div>
				{/* Benefits and Features Section */}
				<div className="flex flex-col items-center justify-center lg:items-start lg:pt-24 lg:ml-40">
					<hr className="border-t-grayviolet w-[50%] mt-24 mb-12 lg:w-[10%]" />
					<h1 className="text-violet font-bold text-5xl tracking-wider">
						We're different
					</h1>
					<div className="lg:flex lg:text-left lg:items-start lg:justify-start lg:mt-8">
						<div className="flex flex-col items-center justify-center lg:items-start">
							<img src={snappy} alt="bolt" className="mt-20 mb-6" />
							<h2 className="text-darkviolet font-bold text-2xl tracking-wide mb-4">
								Snappy Process
							</h2>
							<p className="text-grayviolet w-[75%] font-medium tracking-wide leading-7">
								{" "}
								Our application process can be completed in minutes, not hours.
								Don’t get stuck filling in tedious forms.
							</p>
						</div>
						<div className="flex flex-col items-center justify-center mt-12 lg:items-start">
							<img src={affordable} alt="bolt" className="my-6" />
							<h2 className="text-darkviolet font-bold text-2xl tracking-wide">
								Affordable Prices
							</h2>
							<p className="text-grayviolet w-[75%] font-medium tracking-wide leading-7 mt-6">
								{" "}
								We don’t want you worrying about high monthly costs. Our prices
								may be low, but we still offer the best coverage possible.
							</p>
						</div>
						<div className="flex flex-col items-center justify-center mt-12 lg:items-start">
							<img src={people} alt="bolt" className="my-6" />
							<h2 className="text-darkviolet font-bold text-2xl tracking-wide">
								People First
							</h2>
							<p className="text-grayviolet w-[75%] font-medium tracking-wide leading-7 mt-6">
								{" "}
								Our plans aren’t full of conditions and clauses to prevent
								payouts. We make sure you’re covered when you need it.
							</p>
						</div>
					</div>
				</div>
				{/* How We Work and CTA */}
				<div className="mt-40 bg-violet w-[80%] py-20 mx-auto justify-center items-center howWeWorkBG lg:flex lg:justify-between lg:items-center">
					<h1 className="text-4xl text-white mx-auto w-[60%] lg:text-left lg:mx-0 lg:ml-12 lg:text-5xl">
						Find out more <br className="hidden lg:block" /> about how we work
					</h1>
					<button className="mt-10 border-2 border-white text-white p-2 w-[50%] uppercase font-bold tracking-wider lg:mt-0 lg:w-[15%] lg:mr-24 hover:bg-white hover:text-violet">
						How we work
					</button>
				</div>
			</main>
			{/* FOOTER */}
			<footer className=" pt-20 footer-bg pb-20 mt-40 lg:px-40 lg:py-10">
				<div className="flex flex-col lg:flex-row lg:justify-between items-center mt-6 justify-center">
					<img src={logo} alt="footer logo" className="lg:w-[15%]" />
					{/* Social Icons */}

					<ul className="flex items-center justify-center gap-3 mt-8 lg:gap-4">
						<li className="hover:cursor-pointer">
							<img src={facebook} alt="facebook" />
						</li>
						<li className="hover:cursor-pointer">
							<img src={twitter} alt="twitter" />
						</li>
						<li className="hover:cursor-pointer">
							<img src={pinterest} alt="pinterest" />
						</li>
						<li className="hover:cursor-pointer hover:fill-darkviolet">
							<img
								src={instagram}
								alt="instagram"
								className="hover:fill-black"
							/>
						</li>
					</ul>
				</div>
				{/* Line Break */}
				<hr className="mt-16 w-[90%] mx-auto border-t-grayviolet lg:w-[100%]" />
				<div className="lg:grid lg:grid-cols-4 lg:text-left lg:align-top lg:items-start">
					{/* Our Company Links */}
					<div className="flex flex-col gap-3 justify-center items-center lg:items-start lg:gap-4  mt-8 lg:mt-0 ">
						<h3 className="mt-8 uppercase font-bold text-grayviolet mb-4">
							Our company
						</h3>{" "}
						<p className="text-darkviolet hover:cursor-pointer hover:underline uppercase font-bold">
							How we work
						</p>{" "}
						<p className="text-darkviolet uppercase font-bold  hover:cursor-pointer hover:underline ">
							Why Insure?{" "}
						</p>
						<p className="text-darkviolet uppercase font-bold  hover:cursor-pointer hover:underline ">
							Check Price
						</p>{" "}
						<p className="text-darkviolet uppercase font-bold  hover:cursor-pointer hover:underline ">
							Reviews
						</p>
					</div>
					{/* Help Me Links */}
					<div className="flex flex-col gap-3 justify-center items-center mt-8 lg:mt-0 lg:items-start lg:gap-4">
						<h3 className="mt-8 uppercase font-bold text-grayviolet mb-4">
							Help me
						</h3>{" "}
						<p className="text-darkviolet uppercase font-bold  hover:cursor-pointer hover:underline ">
							FAQ
						</p>{" "}
						<p className="text-darkviolet uppercase font-bold  hover:cursor-pointer hover:underline ">
							Terms of use{" "}
						</p>
						<p className="text-darkviolet uppercase font-bold  hover:cursor-pointer hover:underline ">
							Privacy policy{" "}
						</p>
						<p className="text-darkviolet uppercase font-bold  hover:cursor-pointer hover:underline ">
							Cookies
						</p>
					</div>
					{/* Contact Links */}
					<div className="flex flex-col gap-3 justify-center items-center lg:items-start lg:gap-4  mt-8 lg:mt-0 ">
						<h3 className="mt-8 uppercase font-bold text-grayviolet mb-4">
							Contact
						</h3>{" "}
						<p className="text-darkviolet uppercase font-bold  hover:cursor-pointer hover:underline ">
							Sales
						</p>{" "}
						<p className="text-darkviolet uppercase font-bold  hover:cursor-pointer hover:underline ">
							Support{" "}
						</p>
						<p className="text-darkviolet uppercase font-bold  hover:cursor-pointer hover:underline ">
							Live Chat
						</p>
					</div>
					{/* Other Links */}
					<div className="flex flex-col gap-3 justify-center items-center lg:items-start lg:gap-4  mt-8 lg:mt-0 ">
						<h3 className="mt-8 uppercase font-bold text-grayviolet mb-4">
							Others
						</h3>{" "}
						<p className="text-darkviolet uppercase font-bold  hover:cursor-pointer hover:underline ">
							Careers
						</p>{" "}
						<p className="text-darkviolet uppercase font-bold  hover:cursor-pointer hover:underline ">
							Press
						</p>
						<p className="text-darkviolet uppercase font-bold  hover:cursor-pointer hover:underline ">
							Licenses{" "}
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
