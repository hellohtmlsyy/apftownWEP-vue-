<template>
	<div class="exhibitorsReg conference">
		<div class="top_bg"></div>
		<div class="content">
			<div class="entInfo mb-15">
				<div class="tit">Enterprise information</div>
				<ul>
					<li>
						<span class="info-t">Company name</span>
						<input type="text" placeholder="Required" v-model.trim="entInfo.company">
					</li>
					<li class="up_logo">
						<span class="info-t">LOGO</span>
						<span>
							<span class="vam">Upload&nbsp;&nbsp;</span>
							<cropper @transferUser="getUrl" :headImg="logo" class="headImg"></cropper>
						</span>
					</li>
					<li class="tac">
						<span class="info-t">Country</span>
						<span class="selectBox col-000">
							{{company_selected}}&nbsp;&nbsp;
							<span>></span>
							<select name v-model="company_selected" id="company_select">
								<option v-for="(item, index) in entCompanys" :value="item" :key="index">{{item}}</option>
							</select>
						</span>
					</li>
					<li>
						<span class="info-t">City</span>
						<input type="text" placeholder="Optional" v-model.trim="entInfo.city">
					</li>
					<li>
						<span class="info-t">Address</span>
						<input type="text" placeholder="Optional" v-model.trim="entInfo.address">
					</li>
					<li>
						<span class="info-t">Company type</span>
						<span class="selectBox col-000">
							{{type_selected}}&nbsp;&nbsp;
							<span>></span>
							<select name v-model="type_selected" id="type_select">
								<option v-for="( option, index ) in entTypes" :key="index" :value="option">{{option}}</option>
							</select>
						</span>
					</li>
				</ul>
			</div>
			<div class="perInfo">
				<div class="tit">Personal information</div>
				<div style="padding: 0 .17rem;">
					<ul>
						<li>
							<span class="info-t">Surname</span>
							<input type="text" placeholder="Required" v-model.trim="userInfo.surname">
						</li>
						<li>
							<span class="info-t">Given name</span>
							<input type="text" placeholder="Required" v-model.trim="userInfo.givenName">
						</li>
						<li>
							<span class="info-t">Gender</span>
							<mt-radio v-model="gender" :options="['Mr.', 'Ms.']"></mt-radio>
						</li>
						<li>
							<span class="info-t">Position</span>
							<input type="text" placeholder="Optional" v-model.trim="userInfo.position">
						</li>
						<li>
							<span class="info-t">Phone</span>
							<input type="text" placeholder="Optional" v-model.trim="userInfo.phone">
						</li>
						<li>
							<span class="info-t">Mobile</span>
							<input type="text" placeholder="Required" v-model.trim="userInfo.mobile">
						</li>
						<li>
							<span class="info-t">Email</span>
							<input type="text" placeholder="Optional" v-model.trim="userInfo.email">
						</li>
					</ul>
				</div>
			</div>
			<div class="complete" @click="submit()" :disabled="disable">SUBMIT</div>
		</div>
	</div>
</template>

<script>
	import cropper from '@/components/comm/upload-img.vue';
	import {
		setCookie,
		getCookie
	} from '@/assets/commonjs/util.js';
	import qs from 'qs';
	export default {
		components: {
			cropper
		},
		data() {
			return {
				entInfo: {
					company: "",
					country: "",
					city: "",
					address: "",
					types: ""
				}, // 企业信息
				imgurlObj: '',
				logo: "../../../../static/img/act/ee2019/upload_logo.png",
				company_selected: "China",
				entCompanys: ["Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola",
					"Anguilla", "Antarctica", "Antigua and Barbuda", "Armenia", "Argentina", "Aruba", "Australia", "Austria",
					"Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda",
					"Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil",
					"British Indian Ocean Territory", "British Virgin Islands", "Brunei Darussalam", "Bulgaria", "Burkina Faso",
					"Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African", "Chad", "Chile",
					"China", "China Hongkong", "China Macao", "China Taiwan", "Christmas Island", "Coate d'Ivoire",
					"Cocos (Keeling) Islands", "Colombia", "Comoros", "Republic of the Congo", "The Democratic Republic Of The Congo",
					"Cook Islands", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
					"Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Ethiopia", "Eritrea", "Estonia",
					"Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia",
					"French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece",
					"Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
					"Heard Island and McDonald Islands", "Honduras", "Hungary", "Iceland", "India", "Indonesia",
					"Islamic Republic of Iran", "Isle of Man", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
					"Kazakhstan", "Kenya", "Kiribati", "Democratic People's Republic of Korea", "Republic of Korea", "Kuwait",
					"Kyrgyzstan", "Lao People's Democratic Republic", "Lebanon", "Lesotho", "Latvia", "Liberia",
					"Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "The Former Yugoslav Republic of Macedonia",
					"Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania",
					"Mauritius", "Mayotte", "Mexico", "Federated States of Micronesia", "Monaco", "Mongolia", "Myanmar",
					"Republic of Moldova", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands",
					"Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island",
					"Norway", "Northern Mariana Islands", "Oman", "Palau", "The State of Palestine", "Pakistan", "Panama",
					"Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar",
					"Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia",
					"Saint-Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
					"Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
					"Sri Lanka", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
					"South Georgia and the South Sandwich Islands", "Spain", "Sudan", "Suriname", "Svalbard and Jan Mayen",
					"Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Tajikistan", "Thailand", "Timor-Leste", "Togo",
					"Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands",
					"Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United Republic Of Tanzania",
					"United States", "U.S. Virgin Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City State", "Venezuela",
					"Vietnam", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe", "Other"
				],
				type_selected: "GP",
				entTypes: ["GP", "Investor", "Advisor", "Business service", "Other"],
				gender: "Mr.",
				userInfo: {
					surname: "",
					givenName: "",
					position: "",
					phone: "",
					mobile: "",
					email: ""
				}, // 个人信息
				companyError: false,
				cityError: false,
				addressError: false,
				surNameError: false,
				givenNameError: false,
				positionError: false,
				phoneError: false,
				mobileError: false,
				emailError: false,
				disable: false,
			};
		},
		methods: {
			getUrl(msg) {
				// 获取上传logo地址
				this.imgurlObj = msg;
				this.logo = JSON.parse(this.imgurlObj).path;
			},
			submit(str) {
				this.emailError = this.userInfo.email.length == 0 || /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(this.userInfo.email) ?
					false : true;
				if (this.emailError) {
					this.$layer.msg('Please enter the correct mailbox');
					return;
				}
				this.mobileError = /^\d{1,16}$/.test(this.userInfo.mobile) ? false : true;
				if (this.mobileError) {
					this.$layer.msg('Please enter the correct mobile phone');
				}
				this.phoneError = /^\d{0,16}$/.test(this.userInfo.phone) ? false : true;
				if (this.phoneError) {
					this.$layer.msg('Please enter the correct telephone number');
					return;
				}
				this.positionError = /^.{0,30}$/.test(this.userInfo.position) ? false : true;
				if (this.positionError) {
					this.$layer.msg('Please enter the correct position');
					return;
				}
				this.givenNameError = /^.{1,30}$/.test(this.userInfo.givenName) ? false : true;
				if (this.givenNameError) {
					this.$layer.msg('Please enter the correct given name');
				}
				this.surNameError = /^.{1,20}$/.test(this.userInfo.surname) ? false : true;
				if (this.surNameError) {
					this.$layer.msg('Please enter the correct surname');
				}
				this.addressError = /^.{0,200}$/.test(this.entInfo.address) ? false : true;
				if (this.addressError) {
					this.$layer.msg('Please enter the correct address');
					return;
				}
				this.cityError = /^.{0,30}$/.test(this.entInfo.city) ? false : true;
				if (this.cityError) {
					this.$layer.msg('Please enter the correct city');
					return;
				}
				this.companyError = /^.{1,30}$/.test(this.entInfo.company) ? false : true;
				if (this.companyError) {
					this.$layer.msg('Please enter the correct business name');
				}
				if (!this.mobileError && !this.surNameError && !this.givenNameError && !this.companyError) {
					this.disable = true;
					const PARAMS = {
						serialNo: '20191131',
						eType: 2,
						companyName: this.entInfo.company,
						type: this.type_selected == 'GP' ? '0' : (this.type_selected == 'Investor' ? '1' : (this.type_selected ==
							'Advisor' ? '2' : (this.type_selected == 'Business service' ? '3' : '4'))),
						logo: this.logo,
						country: this.company_selected,
						city: this.entInfo.city,
						address: this.entInfo.address,
						surname: this.userInfo.surname,
						givenName: this.userInfo.givenName,
						gender: this.gender == 'Mr.' ? '1' : '0',
						position: this.userInfo.position,
						phone: this.userInfo.phone,
						mobile: this.userInfo.mobile,
						email: this.userInfo.email,
						language: 1,
						APF_UID: getCookie('APF_UID'),
					}
					this.$axios.post(this.$root.urlPath.NEW + '/ee/participants/submit',
						qs.stringify(PARAMS), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
								'APF_UID': getCookie('APF_UID'),
							}
						}
					).then(res => {
						if (res.data.success) {
							if (str == 'add') {
								window.location.href = this.$root.urlPath.M_APF + '/ee2019/addPer_en?type=2';
							} else {
								window.location.href = this.$root.urlPath.M_APF + '/ee2019/perList_en?type=2';
							}
						} else {
							this.$layer.msg(res.data.errMsg);
						}
					}).catch(err => {
						console.log(err)
					})
				}
			}
		},
	};
</script>

<style>
	@import url("../../../assets/css/ee2019form.css");

	.exhibitorsReg .file-uploads {
		vertical-align: middle;
	}

	/* content */
	.exhibitorsReg .top_bg {
		background: url("../../../../static/img/act/ee2019/sinUp_top.jpg") no-repeat;
		background-size: 100% 100%;
	}

	.exhibitorsReg .content {
		width: 100%;
		padding: 0 .15rem .5rem;
		margin-top: -.47rem;
	}

	.exhibitorsReg .entInfo .tit {
		background-image: linear-gradient(180deg, #e12823 0%, #f3500e 100%),
			linear-gradient(#959595, #959595);
	}

	.exhibitorsReg .perInfo .tit {
		background-image: linear-gradient(180deg, #00479d 0%, #00a0e9 100%),
			linear-gradient(#959595, #959595);
	}

	.exhibitorsReg .entInfo ul {
		padding: 0 .17rem;
	}

	.exhibitorsReg .entInfo .up_logo {
		padding: .15rem 0;
	}

	.exhibitorsReg .entInfo li:last-child {
		border: none;
	}

	.exhibitorsReg .entInfo li .selectBox {
		position: relative;
	}

	.exhibitorsReg .entInfo li select {
		position: absolute;
		right: 0;
		top: 0;
		opacity: 0;
	}
</style>
