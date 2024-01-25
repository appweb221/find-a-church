const ChurchNav = `<nav class="navbar navbar-expand-lg bg-body-tertiary" id="church-nav">
<div class="container-fluid">
  <a href=""><img alt="VOG LOGO" class="logo" src="logo.jpg"></a>
  <a class="navbar-brand" href=""></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarScroll">
    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="">Home</a>
      </li>
      <li class="nav-item">
        <button class="nav-link" id="church-about" onclick="ChurchAbout()">About</button>
      </li>
      <li class="nav-item dropdown" style="cursor: pointer;">
        <a class="nav-link dropdown-toggle"   data-bs-toggle="dropdown">
          Request Help
        </a>
        <ul class="dropdown-menu">
          <li id="church-prayer"><a class="dropdown-item" onclick="ChurchPrayer()">Prayer</a></li>
          <li><a class="dropdown-item" id="church-addiction" onclick="ChurchAddiction()">Addiction and Suicide</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" id="church-other-request" onclick="ChurchOtherRequest()">Other request</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <button class="nav-link"  id="church-signin" onclick="ChurchSignin()">Sign in</button>
      </li>
      <li class="nav-item">
        <button class="nav-link"  id="church-signup" onclick="ChurchSignup()">Sign up</button>
      </li>
    </ul>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>`;
function ChurchAbout() {
    document.body.innerHTML = `${ChurchNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"><h5 style="text-align: center">About V.O.G.</h5><br><p>Thank you for your time to learn more about Voice of God Organization. We are a Christian environment where you can find all the information about your church wherever you are in the world. Wherever you go in the world, V.O.G. allows you to find a church in your location and to be aware of upcoming events. We are a platform where Christians can share information about the location of a church, can share upcoming event and publish books or/and other materials (articles, videos, etc.). Our hope is that you are blessed because of this platform, and you use this platform to bless others.</p><div>`;
};
function ChurchPrayer() {
    document.body.innerHTML = `${ChurchNav}<div style="background-color: white; padding: 30px; border-radius: 30px;">    <section class="bottom" style="text-align: center;">
<fieldset>
    <legend style="text-align: center;">Select who you want to pray for you:</legend>
  
    <div>
      <input type="radio" name="drone"  checked />
      <label for="administration" style="text-align: center;">Christian all over the world</label>
    </div>
  
    <div>
      <input type="radio"  name="drone" />
      <label for="pedagogy" style="text-align: center;">Private ministry</label>
    </div>

    <div>
      <input type="radio"  name="drone" />
      <label for="pedagogy" style="text-align: center;">Member of my church</label>
    </div>
 
    <div>
        <input type="radio" name="drone" />
        <label for="student" style="text-align: center;">Other</label>
    </div>
  </fieldset>
<br>
<label for="name" style="text-align: center;"><b>First Name:</b></label>
<br>
<input style="text-align: center; background-color: rgb(235, 233, 162);" type="text" placeholder="Enter your first name" name="email" required>
<br>
<br>
<label for="name" style="text-align: center;"><b>Last Name:</b></label>
<br>
<input style="text-align: center; background-color: rgb(219, 224, 146);" type="text" placeholder="Enter your last name" name="email" required>
<br>
<br>
<label for="email" style="text-align: center;"><b>Email:   </b></label>
<br>
<input style="text-align: center; background-color: rgb(236, 232, 169);" type="text" placeholder="Enter your email" name="email" required>
<br>
<br>
<label for="comment" style="text-align: center;"><b>Describe your request:</b></label>
<br>
<textarea style="text-align: center; background-color: rgb(222, 236, 169); width: 90%; height: 80%;" id="comment" type="comment"  name="comment" placeholder="Describe your request in a few words..." required></textarea>
<br>
<br>

<label>
<input type="checkbox" checked="checked" name="remember"> I confirm all the information is true
</label> 
<button type="submit" style="background-color: rgb(168, 168, 121); font-weight: bold; color: white;">Submit</button>
</section><div>`};
function ChurchAddiction() {
    document.body.innerHTML = `${ChurchNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"><section class="bottom" style="text-align: center;">
<fieldset>
    <legend style="text-align: center;">Select your option:</legend>
  
    <div>
      <input type="radio" name="drone"  checked />
      <label for="administration" style="text-align: center;">Suicide thoughts</label>
    </div>
  
    <div>
      <input type="radio"  name="drone" />
      <label for="pedagogy" style="text-align: center;">Alcoholism</label>
    </div>

    <div>
      <input type="radio"  name="drone" />
      <label for="pedagogy" style="text-align: center;">Drug addiction</label>
    </div>
 
    <div>
        <input type="radio" name="drone" />
        <label for="student" style="text-align: center;">Other</label>
    </div>
  </fieldset>
<br>
<label for="name" style="text-align: center;"><b>First Name:</b></label>
<br>
<input style="text-align: center;" type="text" placeholder="Enter your first name" name="email" required>
<br>
<br>
<label for="name" style="text-align: center;"><b>Last Name:</b></label>
<br>
<input style="text-align: center; type="text" placeholder="Enter your last name" name="email" required>
<br>
<br>
<label for="email" style="text-align: center;"><b>Email:   </b></label>
<br>
<input style="text-align: center; type="text" placeholder="Enter your email" name="email" required>
<br>
<br>
<label for="comment" style="text-align: center;"><b>Describe your request:</b></label>
<br>
<textarea style="text-align: center;  width: 90%; height: 200px;" id="comment" type="comment"  name="comment" placeholder="Describe your request in a few words..." required></textarea>
<br>
<br>
<label>
<input type="checkbox" checked="checked" name="remember"> I confirm all the information is true
</label> 
<button type="submit" style="background-color: rgb(168, 168, 121); font-weight: bold; color: white;">Submit</button>
</section><div>`};
function AddChurchEvent() {
    document.body.innerHTML = `${ChurchNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"><section class="bottom" style="text-align: center;">
<fieldset>
    <legend style="text-align: center;">I want to:</legend>
  
    <div>
      <input type="radio" name="drone" checked />
      <label for="administration" style="text-align: center;">Add my church</label>
    </div>
  
    <div>
      <input type="radio"  name="drone" />
      <label for="pedagogy" style="text-align: center;">Publish my event</label>
    </div>
  </fieldset>
<br>
<label for="name" style="text-align: center;"><b>First Name:</b></label>
<br>
<input style="text-align: center;" type="text" placeholder="Enter your first name" name="email" required>
<br>
<br>
<label for="name" style="text-align: center;"><b>Last Name:</b></label>
<br>
<input style="text-align: center;" type="text" placeholder="Enter your last name" name="email" required>
<br>
<br>
<label for="email" style="text-align: center;"><b>Email:   </b></label>
<br>
<input style="text-align: center;" type="text" placeholder="Enter your email" name="email" required>
<br>
<br>
<label for="phone" style="text-align: center;"><b>Phone:</b></label>
<br>
<input style="text-align: center;" type="phone"  name="phone" placeholder="700 000 1111" required>
<br>
<br>
<label for="Address" style="text-align: center;"><b>Address:</b></label>
<br>
<input style="text-align: center;" type="Address"  name="Address" placeholder="Enter the address with Zip" required>
<br>
<br>
<label for="comment" style="text-align: center;"><b>Describe your request:</b></label>
<br>
<textarea style="text-align: center; width: 90%; height: 80%;" id="comment" type="comment"  name="comment" placeholder="Describe your request in a few words..." required></textarea>
<br>
<br>

<label>
<input type="checkbox" checked="checked" name="remember"> I confirm all the information is true
</label> 
<button type="submit"; font-weight: bold; color: white;">Submit</button>

</section><div>`};
function ChurchPubliShingBook() {
    document.body.innerHTML = `${ChurchNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"><h5 style="text-align: center">Publish a Book</h5><br><p>The Voice of God Organization assists any writer with publishing a book from A to Z. That means, if you already have your manuscript with more than 45 pages, we can assist you in publishing your book with the best Edition House in the world. Your book will automatically be translated into all the languages and available on Amazon, Ebay, Hachette, etc. All these steps from A to Z are free of charge, you have nothing to pay to see your book published. For more information please feel free to email us at: balo1991@live.com</p><div>`};
function ChurchOtherRequest() {
    document.body.innerHTML = `${ChurchNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"><section class="bottom" style="text-align: center;">
<fieldset>
    <legend style="text-align: center;">Select your option:</legend>
  
    <div>
      <input type="radio" name="drone"  checked />
      <label for="administration" style="text-align: center;">Share a video or article</label>
    </div>
  
    <div>
      <input type="radio"  name="drone" />
      <label for="pedagogy" style="text-align: center;">Volunteer</label>
    </div>

    <div>
      <input type="radio"  name="drone" />
      <label for="pedagogy" style="text-align: center;">Donation</label>
    </div>
 
    <div>
        <input type="radio" name="drone" />
        <label for="student" style="text-align: center;">Other</label>
    </div>
  </fieldset>
<br>
<label for="name" style="text-align: center;"><b>First Name:</b></label>
<br>
<input style="text-align: center;" type="text" placeholder="Enter your first name" name="email" required>
<br>
<br>
<label for="name" style="text-align: center;"><b>Last Name:</b></label>
<br>
<input style="text-align: center; type="text" placeholder="Enter your last name" name="email" required>
<br>
<br>
<label for="email" style="text-align: center;"><b>Email:   </b></label>
<br>
<input style="text-align: center; type="text" placeholder="Enter your email" name="email" required>
<br>
<br>
<label for="comment" style="text-align: center;"><b>Explanation:</b></label>
<br>
<textarea style="text-align: center;  width: 90%; height: 200px;" id="comment" type="comment"  name="comment" placeholder="Describe your request in a few words..." required></textarea>
<br>
<br>
<label>
<input type="checkbox" checked="checked" name="remember"> I confirm all the information is true
</label> 
<button type="submit" style="background-color: rgb(168, 168, 121); font-weight: bold; color: white;">Submit</button>
</section><div>`};
function ChurchSignin() {
    document.body.innerHTML = `${ChurchNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"><label for="uname"><b>Username:</b></label>
<br>
<input type="text" placeholder="Enter Username" name="uname" required>
<br>
<br>
<label for="psw"><b>Password:</b></label>
<br>
<input type="password" placeholder="Enter Password" name="psw" required>
<br>
<br>
<button type="submit">Sign in</button>
<br>
<br>
<label>
  <input type="checkbox" checked="checked" name="remember"> Remember me
</label> 
<br>

<button type="submit" onclick="ChurchSignup()">Create an account</button><div>`};
function ChurchSignup() {
    document.body.innerHTML = `${ChurchNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"><form style="text-align: center"><fieldset>
  <legend style="text-align: center;">Select a status:</legend>

  <div>
    <input type="radio" name="drone" id="ministry" checked />
    <label for="ministry">Ministry(Priest, Pastor, etc.)</label>
  </div>

  <div>
    <input type="radio" name="drone" id="christian" />
    <label for="christian">Christian</label>
  </div>

  <div>
    <input type="radio"  name="drone" id="not-a-believer" />
    <label for="not-a-believer">Not a believer</label>
  </div>

  <div>
      <input type="radio" id="other" name="drone" value="other" />
      <label for="other">Other</label>
    </div>
</fieldset>
<br>
<label for="name"><b>First Name:</b></label>
<input type="text" placeholder="Enter your first name" name="email" required>
<br>
<br>
<label for="name"><b>Last Name:</b></label>
<input type="text" placeholder="Enter your last name" name="email" required>
<br>
<br>
<label for="email"><b>Email:   </b></label>
<input type="text" placeholder="Enter your email" name="email" required>
<br>
<br>
<label for="uname"><b>Username:</b></label>
<input type="text"  name="uname" placeholder="choose a username" required>
<br>
<br>
<label for="psw"><b>Password:</b></label>
<input type="password" placeholder="Create a password" name="psw" required>
<br>
<br>
<label for="psw"><b>Confirm:</b></label>
<input type="password" placeholder="Confirm the password" name="psw" required>
<br>
<br>
<label>
<input type="checkbox" checked="checked" name="remember"> I confirm all the information is true
</label> 
<button type="submit">Submit</button></form><div>`};
function FindNearestChurch() {
    document.body.innerHTML = `${ChurchNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"><select>
  <option value="Country" selected>Current Country</option>
  <option value="Afghanistan">Afghanistan</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="American Samoa">American Samoa</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Anguilla">Anguilla</option>
<option value="Antartica">Antarctica</option>
<option value="Antigua and Barbuda">Antigua and Barbuda</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Aruba">Aruba</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahamas">Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bermuda">Bermuda</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
<option value="Botswana">Botswana</option>
<option value="Bouvet Island">Bouvet Island</option>
<option value="Brazil">Brazil</option>
<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
<option value="Brunei Darussalam">Brunei Darussalam</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="Cape Verde">Cape Verde</option>
<option value="Cayman Islands">Cayman Islands</option>
<option value="Central African Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Christmas Island">Christmas Island</option>
<option value="Cocos Islands">Cocos (Keeling) Islands</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo">Congo</option>
<option value="Congo">Congo, the Democratic Republic of the</option>
<option value="Cook Islands">Cook Islands</option>
<option value="Costa Rica">Costa Rica</option>
<option value="Cota D'Ivoire">Cote d'Ivoire</option>
<option value="Croatia">Croatia (Hrvatska)</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="Czech Republic">Czech Republic</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic">Dominican Republic</option>
<option value="East Timor">East Timor</option>
<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="El Salvador">El Salvador</option>
<option value="Equatorial Guinea">Equatorial Guinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Falkland Islands">Falkland Islands (Malvinas)</option>
<option value="Faroe Islands">Faroe Islands</option>
<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="France Metropolitan">France, Metropolitan</option>
<option value="French Guiana">French Guiana</option>
<option value="French Polynesia">French Polynesia</option>
<option value="French Southern Territories">French Southern Territories</option>
<option value="Gabon">Gabon</option>
<option value="Gambia">Gambia</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Gibraltar">Gibraltar</option>
<option value="Greece">Greece</option>
<option value="Greenland">Greenland</option>
<option value="Grenada">Grenada</option>
<option value="Guadeloupe">Guadeloupe</option>
<option value="Guam">Guam</option>
<option value="Guatemala">Guatemala</option>
<option value="Guinea">Guinea</option>
<option value="Guinea-Bissau">Guinea-Bissau</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
<option value="Holy See">Holy See (Vatican City State)</option>
<option value="Honduras">Honduras</option>
<option value="Hong Kong">Hong Kong</option>
<option value="Hungary">Hungary</option>
<option value="Iceland">Iceland</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran">Iran (Islamic Republic of)</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="Jamaica">Jamaica</option>
<option value="Japan">Japan</option>
<option value="Jordan">Jordan</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
<option value="Korea">Korea, Republic of</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Lao">Lao People's Democratic Republic</option>
<option value="Latvia">Latvia</option>
<option value="Lebanon">Lebanon</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Liberia</option>
<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Macau">Macau</option>
<option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Malaysia">Malaysia</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option>
<option value="Malta">Malta</option>
<option value="Marshall Islands">Marshall Islands</option>
<option value="Martinique">Martinique</option>
<option value="Mauritania">Mauritania</option>
<option value="Mauritius">Mauritius</option>
<option value="Mayotte">Mayotte</option>
<option value="Mexico">Mexico</option>
<option value="Micronesia">Micronesia, Federated States of</option>
<option value="Moldova">Moldova, Republic of</option>
<option value="Monaco">Monaco</option>
<option value="Mongolia">Mongolia</option>
<option value="Montserrat">Montserrat</option>
<option value="Morocco">Morocco</option>
<option value="Mozambique">Mozambique</option>
<option value="Myanmar">Myanmar</option>
<option value="Namibia">Namibia</option>
<option value="Nauru">Nauru</option>
<option value="Nepal">Nepal</option>
<option value="Netherlands">Netherlands</option>
<option value="Netherlands Antilles">Netherlands Antilles</option>
<option value="New Caledonia">New Caledonia</option>
<option value="New Zealand">New Zealand</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="Niue">Niue</option>
<option value="Norfolk Island">Norfolk Island</option>
<option value="Northern Mariana Islands">Northern Mariana Islands</option>
<option value="Norway">Norway</option>
<option value="Oman">Oman</option>
<option value="Pakistan">Pakistan</option>
<option value="Palau">Palau</option>
<option value="Panama">Panama</option>
<option value="Papua New Guinea">Papua New Guinea</option>
<option value="Paraguay">Paraguay</option>
<option value="Peru">Peru</option>
<option value="Philippines">Philippines</option>
<option value="Pitcairn">Pitcairn</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>
<option value="Puerto Rico">Puerto Rico</option>
<option value="Qatar">Qatar</option>
<option value="Reunion">Reunion</option>
<option value="Romania">Romania</option>
<option value="Russia">Russian Federation</option>
<option value="Rwanda">Rwanda</option>
<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
<option value="Saint LUCIA">Saint LUCIA</option>
<option value="Saint Vincent">Saint Vincent and the Grenadines</option>
<option value="Samoa">Samoa</option>
<option value="San Marino">San Marino</option>
<option value="Sao Tome and Principe">Sao Tome and Principe</option> 
<option value="Saudi Arabia">Saudi Arabia</option>
<option value="Senegal">Senegal</option>
<option value="Seychelles">Seychelles</option>
<option value="Sierra">Sierra Leone</option>
<option value="Singapore">Singapore</option>
<option value="Slovakia">Slovakia (Slovak Republic)</option>
<option value="Slovenia">Slovenia</option>
<option value="Solomon Islands">Solomon Islands</option>
<option value="Somalia">Somalia</option>
<option value="South Africa">South Africa</option>
<option value="South Georgia">South Georgia and the South Sandwich Islands</option>
<option value="Span">Spain</option>
<option value="SriLanka">Sri Lanka</option>
<option value="St. Helena">St. Helena</option>
<option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
<option value="Sudan">Sudan</option>
<option value="Suriname">Suriname</option>
<option value="Svalbard">Svalbard and Jan Mayen Islands</option>
<option value="Swaziland">Swaziland</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>
<option value="Syria">Syrian Arab Republic</option>
<option value="Taiwan">Taiwan, Province of China</option>
<option value="Tajikistan">Tajikistan</option>
<option value="Tanzania">Tanzania, United Republic of</option>
<option value="Thailand">Thailand</option>
<option value="Togo">Togo</option>
<option value="Tokelau">Tokelau</option>
<option value="Tonga">Tonga</option>
<option value="Trinidad and Tobago">Trinidad and Tobago</option>
<option value="Tunisia">Tunisia</option>
<option value="Turkey">Turkey</option>
<option value="Turkmenistan">Turkmenistan</option>
<option value="Turks and Caicos">Turks and Caicos Islands</option>
<option value="Tuvalu">Tuvalu</option>
<option value="Uganda">Uganda</option>
<option value="Ukraine">Ukraine</option>
<option value="United Arab Emirates">United Arab Emirates</option>
<option value="United Kingdom">United Kingdom</option>
<option value="United States">United States</option>
<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
<option value="Uruguay">Uruguay</option>
<option value="Uzbekistan">Uzbekistan</option>
<option value="Vanuatu">Vanuatu</option>
<option value="Venezuela">Venezuela</option>
<option value="Vietnam">Viet Nam</option>
<option value="Virgin Islands (British)">Virgin Islands (British)</option>
<option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
<option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
<option value="Western Sahara">Western Sahara</option>
<option value="Yemen">Yemen</option>
<option value="Serbia">Serbia</option>
<option value="Zambia">Zambia</option>
<option value="Zimbabwe">Zimbabwe</option>
</select><br><br>
<label for="city">City:</label><input id="city" placeholder="Current City"><br><br><button id="sumbit" type="submit">Send</button><div>`};
function ChurchEvent() {
    document.body.innerHTML = `${ChurchNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"><select>
  <option value="Country" selected>Current Country</option>
  <option value="Afghanistan">Afghanistan</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="American Samoa">American Samoa</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Anguilla">Anguilla</option>
<option value="Antartica">Antarctica</option>
<option value="Antigua and Barbuda">Antigua and Barbuda</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Aruba">Aruba</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahamas">Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bermuda">Bermuda</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
<option value="Botswana">Botswana</option>
<option value="Bouvet Island">Bouvet Island</option>
<option value="Brazil">Brazil</option>
<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
<option value="Brunei Darussalam">Brunei Darussalam</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="Cape Verde">Cape Verde</option>
<option value="Cayman Islands">Cayman Islands</option>
<option value="Central African Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Christmas Island">Christmas Island</option>
<option value="Cocos Islands">Cocos (Keeling) Islands</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo">Congo</option>
<option value="Congo">Congo, the Democratic Republic of the</option>
<option value="Cook Islands">Cook Islands</option>
<option value="Costa Rica">Costa Rica</option>
<option value="Cota D'Ivoire">Cote d'Ivoire</option>
<option value="Croatia">Croatia (Hrvatska)</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="Czech Republic">Czech Republic</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic">Dominican Republic</option>
<option value="East Timor">East Timor</option>
<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="El Salvador">El Salvador</option>
<option value="Equatorial Guinea">Equatorial Guinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Falkland Islands">Falkland Islands (Malvinas)</option>
<option value="Faroe Islands">Faroe Islands</option>
<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="France Metropolitan">France, Metropolitan</option>
<option value="French Guiana">French Guiana</option>
<option value="French Polynesia">French Polynesia</option>
<option value="French Southern Territories">French Southern Territories</option>
<option value="Gabon">Gabon</option>
<option value="Gambia">Gambia</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Gibraltar">Gibraltar</option>
<option value="Greece">Greece</option>
<option value="Greenland">Greenland</option>
<option value="Grenada">Grenada</option>
<option value="Guadeloupe">Guadeloupe</option>
<option value="Guam">Guam</option>
<option value="Guatemala">Guatemala</option>
<option value="Guinea">Guinea</option>
<option value="Guinea-Bissau">Guinea-Bissau</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
<option value="Holy See">Holy See (Vatican City State)</option>
<option value="Honduras">Honduras</option>
<option value="Hong Kong">Hong Kong</option>
<option value="Hungary">Hungary</option>
<option value="Iceland">Iceland</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran">Iran (Islamic Republic of)</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="Jamaica">Jamaica</option>
<option value="Japan">Japan</option>
<option value="Jordan">Jordan</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
<option value="Korea">Korea, Republic of</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Lao">Lao People's Democratic Republic</option>
<option value="Latvia">Latvia</option>
<option value="Lebanon">Lebanon</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Liberia</option>
<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Macau">Macau</option>
<option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Malaysia">Malaysia</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option>
<option value="Malta">Malta</option>
<option value="Marshall Islands">Marshall Islands</option>
<option value="Martinique">Martinique</option>
<option value="Mauritania">Mauritania</option>
<option value="Mauritius">Mauritius</option>
<option value="Mayotte">Mayotte</option>
<option value="Mexico">Mexico</option>
<option value="Micronesia">Micronesia, Federated States of</option>
<option value="Moldova">Moldova, Republic of</option>
<option value="Monaco">Monaco</option>
<option value="Mongolia">Mongolia</option>
<option value="Montserrat">Montserrat</option>
<option value="Morocco">Morocco</option>
<option value="Mozambique">Mozambique</option>
<option value="Myanmar">Myanmar</option>
<option value="Namibia">Namibia</option>
<option value="Nauru">Nauru</option>
<option value="Nepal">Nepal</option>
<option value="Netherlands">Netherlands</option>
<option value="Netherlands Antilles">Netherlands Antilles</option>
<option value="New Caledonia">New Caledonia</option>
<option value="New Zealand">New Zealand</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="Niue">Niue</option>
<option value="Norfolk Island">Norfolk Island</option>
<option value="Northern Mariana Islands">Northern Mariana Islands</option>
<option value="Norway">Norway</option>
<option value="Oman">Oman</option>
<option value="Pakistan">Pakistan</option>
<option value="Palau">Palau</option>
<option value="Panama">Panama</option>
<option value="Papua New Guinea">Papua New Guinea</option>
<option value="Paraguay">Paraguay</option>
<option value="Peru">Peru</option>
<option value="Philippines">Philippines</option>
<option value="Pitcairn">Pitcairn</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>
<option value="Puerto Rico">Puerto Rico</option>
<option value="Qatar">Qatar</option>
<option value="Reunion">Reunion</option>
<option value="Romania">Romania</option>
<option value="Russia">Russian Federation</option>
<option value="Rwanda">Rwanda</option>
<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
<option value="Saint LUCIA">Saint LUCIA</option>
<option value="Saint Vincent">Saint Vincent and the Grenadines</option>
<option value="Samoa">Samoa</option>
<option value="San Marino">San Marino</option>
<option value="Sao Tome and Principe">Sao Tome and Principe</option> 
<option value="Saudi Arabia">Saudi Arabia</option>
<option value="Senegal">Senegal</option>
<option value="Seychelles">Seychelles</option>
<option value="Sierra">Sierra Leone</option>
<option value="Singapore">Singapore</option>
<option value="Slovakia">Slovakia (Slovak Republic)</option>
<option value="Slovenia">Slovenia</option>
<option value="Solomon Islands">Solomon Islands</option>
<option value="Somalia">Somalia</option>
<option value="South Africa">South Africa</option>
<option value="South Georgia">South Georgia and the South Sandwich Islands</option>
<option value="Span">Spain</option>
<option value="SriLanka">Sri Lanka</option>
<option value="St. Helena">St. Helena</option>
<option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
<option value="Sudan">Sudan</option>
<option value="Suriname">Suriname</option>
<option value="Svalbard">Svalbard and Jan Mayen Islands</option>
<option value="Swaziland">Swaziland</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>
<option value="Syria">Syrian Arab Republic</option>
<option value="Taiwan">Taiwan, Province of China</option>
<option value="Tajikistan">Tajikistan</option>
<option value="Tanzania">Tanzania, United Republic of</option>
<option value="Thailand">Thailand</option>
<option value="Togo">Togo</option>
<option value="Tokelau">Tokelau</option>
<option value="Tonga">Tonga</option>
<option value="Trinidad and Tobago">Trinidad and Tobago</option>
<option value="Tunisia">Tunisia</option>
<option value="Turkey">Turkey</option>
<option value="Turkmenistan">Turkmenistan</option>
<option value="Turks and Caicos">Turks and Caicos Islands</option>
<option value="Tuvalu">Tuvalu</option>
<option value="Uganda">Uganda</option>
<option value="Ukraine">Ukraine</option>
<option value="United Arab Emirates">United Arab Emirates</option>
<option value="United Kingdom">United Kingdom</option>
<option value="United States">United States</option>
<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
<option value="Uruguay">Uruguay</option>
<option value="Uzbekistan">Uzbekistan</option>
<option value="Vanuatu">Vanuatu</option>
<option value="Venezuela">Venezuela</option>
<option value="Vietnam">Viet Nam</option>
<option value="Virgin Islands (British)">Virgin Islands (British)</option>
<option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
<option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
<option value="Western Sahara">Western Sahara</option>
<option value="Yemen">Yemen</option>
<option value="Serbia">Serbia</option>
<option value="Zambia">Zambia</option>
<option value="Zimbabwe">Zimbabwe</option>
</select><br><br>
<label for="city">City:</label><input id="city" placeholder="Current City"><br><br><button id="sumbit" type="submit">Send</button><div>`};
function ChurchMaterials() {
  document.body.innerHTML = `${ChurchNav}<div style="background-color: white; padding: 30px; border-radius: 30px;"><div class="church-resources">
<div>
  <h5>Increasing our knowledge of reading the word of God:</h5>
  <p><a href="GodWordDerekPrince.pdf">Power of the word of God</a>.pdf</p>
  <p><a href="HaveFaithInGod.PDF">Have Faith</a>.pdf</p>
  <p><a href="FaithByExperience.PDF">Faith by Experience</a>.pdf</p>
  <p><a href="BlessingOrCurseDerekPrince.pdf">Blessing or curse</a>.pdf</p>
  <p><a href="PresenceOfGodDerekPrince.pdf">Presence of God</a>.pdf</p>
  <p><a href="JesusDoNotChange.PDF">Jesus is the same</a>.pdf</p>
</div>
<div class="container" style="margin: 0px; padding: 0px;">
  <div class="row">
    <div class="col-4">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MOHI3FhPdu8?si=2f-ejCYclPAVP4Mi"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
    <div class="col-4">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Yzivz7gcMtE?si=Z0ePpG4eIL-_5YyY"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
    <div class="col-4">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/94zukFLg8Bg?si=xbSyZsDj_IAJR8WL"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-4">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Zly-WojpBDc?si=vvWziqUzy2f5sVW6"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
    <div class="col-4">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/r-9L2-aVR4I?si=Dr7zYlZQs3LW_JYo"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
    <div class="col-4">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/RhfVp77eUFc?si=cOc47q0_oEt-4kl7"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
  </div>
</div>
<div class="container" style="margin: 0px; padding: 0px;">
  <div class="row">
    <div class="col-4">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/UisCcZN_dsY?si=IWvAQhHcGAhGz2dw"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
    <div class="col-4">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/LfTutggd0c0?si=dxpvIwzfiXB5eRRu"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
    <div class="col-4">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/rS10I0uLsew?si=6sONCUyp6B61lPTp"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
  </div>
</div>
</div><div>`};
