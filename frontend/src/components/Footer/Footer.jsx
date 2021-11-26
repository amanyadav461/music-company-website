import "./Footer.css";
export default function Footer() {
	return (
		<footer>
			<button className="ft-gotop-btn">GOTOP</button>
			<div className="ft-flex-box">
				<div className="ft-cont">
					<div className="ft-cont-head ft-span-i">
						<span>ABOUT AWAAZ</span>
					</div>
					<p className="ft-cont-p-sec">
						Nam vestibulum, arc sodales feugiat consectetur, nisl orci bibendeum
						elit, eu euismod magna sapien ut nibh. Donec semper quam
						scelerisque.
					</p>
					<p className="ft-cont-p-sec">
						Contary to popular belief, Lorem Ipsum is not simply random text. it
						has roots in a piece of classical Latin literature from 45BC, making
						it over 2000 years old
					</p>
				</div>
				<div className="ft-vertical-line"></div>
				<div className="ft-cont">
					<div className="ft-cont-head ft-span-i">
						<i class="fab fa-twitter"></i>
						<span className="ft-cont-head-span">TWITTER</span>
					</div>
					<div>
						<p className="ft-cont-p-sec">
							In hac habitasse platea dictumst Nam pulvinar, odio sed rhoncus
							suscipt
						</p>
					</div>
					<span className="ft-cont-red">http://t.co/abcdefgh 2 days ago</span>
					<div className="ft-cont-p-sec">
						<p>
							<span className="ft-cont-white">RT</span>
							<span className="ft-cont-red">@Awaaz-app;</span>
							<span>
								Proin metus odio, aliquam eget molestie nec, gravida ut sapien.
								Phasellus quis est
							</span>
							<span className="ft-cont-red">
								http://t.co/abcdefgh 8 days ago
							</span>
						</p>
					</div>
					<div className="ft-cont-p-sec">
						<p>
							<span className="ft-cont-white">RT</span>
							<span className="ft-cont-red">@thisotthat;</span>
							<span>onec semper quam scelerisque tortor distum gravida</span>
							<span className="ft-cont-red">
								at http://t.co/abcdefgh 8 days ago
							</span>
						</p>
					</div>
				</div>
				<div className="ft-vertical-line"></div>
				<div className="ft-cont">
					<div className="ft-cont-head ft-span-i">
						<i class="fas fa-link"></i>
						<span className="ft-cont-head-span">QUICK LINKS</span>
					</div>
					<div className="ft-quick-links">
						<span>News</span>
						<span>Gallery</span>
						<span>Video</span>
						<span>Shop</span>
						<span>Contact</span>
						<span>Event</span>
						<span>About us</span>
						<span>Shorcode</span>
						<span>Terms&Condition</span>
						<span>Calender</span>
					</div>
				</div>
				<div className="ft-vertical-line"></div>
				<div className="ft-cont">
					<div className="ft-cont-head ft-span-i">
						<i class="fas fa-envelope"></i>
						<span className="ft-cont-head-span">NEWS LETTER</span>
					</div>
					<div className="ft-cont-p-sec">
						<p>
							Etiam pretium quam sed lectus mollis, elementum velit cursus.
							Phasellus vitae sem. Mauris vestibulum
						</p>
					</div>
					<div className="submit-email">
						<label>
							<input
								className="submit-email-input"
								type="text"
								placeholder="Your email address"
								name="name"
							/>
						</label>
						<input className="submit-email-btn" type="submit" value="Submit" />
					</div>
				</div>
			</div>
			<hr className="ft-hr" />
			<div className="ft-btm">
				<div className="ft-btm-copyright">
					<span>&copy; 2020 Awaaz, All Rights Reserved</span>
				</div>
				<div className="ft-btm-love">
					<i class="fas fa-heart"></i>
					<span>Love this theme</span>
				</div>
				<div className="ft-btm-social">
					<span className="ft-btm-social-i">
						<i class="fab fa-facebook-f"></i>
					</span>
					<span className="ft-btm-social-i">
						<i class="fab fa-twitter"></i>
					</span>
					<span className="ft-btm-social-i">
						<i class="fab fa-linkedin-in"></i>
					</span>
					<span className="ft-btm-social-i">
						<i class="fab fa-youtube"></i>
					</span>
					<span className="ft-btm-social-i">
						<i class="fab fa-skype"></i>
					</span>
					<span className="ft-btm-social-i">
						<i class="fab fa-flickr"></i>
					</span>
					<span className="ft-btm-social-i">
						<i class="fab fa-apple"></i>
					</span>
					<span className="ft-btm-social-i">
						<i class="fab fa-discord"></i>
					</span>
					<span className="ft-btm-social-i">
						<i class="fas fa-hashtag"></i>
					</span>
				</div>
			</div>
		</footer>
	);
}
