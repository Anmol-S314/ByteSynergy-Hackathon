pragma solidity ^0.5.0;

contract UBPP {
  string public name;
  uint public imageCount = 0;
  uint public docCount = 0;
  uint public mformCount = 0;
  mapping(uint => Image) public images;
  mapping(uint => Doc) public docs;
  mapping(uint => Form) public mforms;
  string public fullname = 'unanswered';
  string public mail = 'unanswered';
  string public phno = 'unanswered';
  string public gender = 'unanswered';
  string public date = 'unanswered';
  string public height = 'unanswered';
  string public weight = 'unanswered';
  string public blood = 'unanswered';
  string public vacc = 'unanswered';
  string public all = 'unanswered';
  string public pres = 'unanswered';
  string public sym = 'unanswered';
  string public trav = 'unanswered';
  string public his = 'unanswered';
  string public ename = 'unanswered';
  string public eno = 'unanswered';
  string public ex = 'unanswered';

  
  Form public mform;

  struct Image {
    uint id;
    string hash;
    string description;
    uint tipAmount;
    address payable author;
  }

  struct Form {
    string formname;
  }

  struct Doc {
    uint id;
    string hash;
    string description;
    uint tipAmount;
    address payable author;
  }

  event ImageCreated(
    uint id,
    string hash,
    string description,
    uint tipAmount,
    address payable author
  );

  event DocCreated(
    uint id,
    string hash,
    string description,
    uint tipAmount,
    address payable author
  );

  event ImageTipped(
    uint id,
    string hash,
    string description,
    uint tipAmount,
    address payable author
  );

  event NameCreated(
    string name,
    address payable author
  );

  constructor() public {
    name = "UBPP";
	//name = "UBPP";
  }

  function testfunc() public returns (string memory) {
    return fullname;
  }

  function uploadImage(string memory _imgHash, string memory _description) public {
    // Make sure the image hash exists
    require(bytes(_imgHash).length > 0);
    // Make sure image description exists
    require(bytes(_description).length > 0);
    // Make sure uploader address exists
    require(msg.sender!=address(0));

    // Increment image id
    imageCount ++;

    // Add Image to the contract
    images[imageCount] = Image(imageCount, _imgHash, _description, 0, msg.sender);
    // Trigger an event
    emit ImageCreated(imageCount, _imgHash, _description, 0, msg.sender);
  }

  function uploadName(string memory _name) public returns (string memory){
    require(bytes(_name).length > 0);
    mformCount++;
    require(msg.sender!=address(0));
    mforms[mformCount] = Form(_name);
    fullname = _name;
    emit NameCreated(_name, msg.sender);

    return fullname;
  }

  function uploadMail(string memory _name) public returns (string memory){
    require(bytes(_name).length > 0);

    require(msg.sender!=address(0));
    mforms[mformCount] = Form(_name);
    mail = _name;
    //emit NameCreated(_name, msg.sender);

    return mail;
  }
  
  function uploadPhno(string memory _name) public returns (string memory){
    require(bytes(_name).length > 0);
    mformCount++;
    require(msg.sender!=address(0));
    mforms[mformCount] = Form(_name);
    phno = _name;
    emit NameCreated(_name, msg.sender);

    return phno;
  }
  
  function uploadGender(string memory _name) public returns (string memory){
    require(bytes(_name).length > 0);
    mformCount++;
    require(msg.sender!=address(0));
    mforms[mformCount] = Form(_name);
    gender = _name;
    emit NameCreated(_name, msg.sender);

    return gender;
  }
  
  function uploadDob(string memory _name) public returns (string memory){
    require(bytes(_name).length > 0);
    mformCount++;
    require(msg.sender!=address(0));
    mforms[mformCount] = Form(_name);
    date = _name;
    //emit NameCreated(_name, msg.sender);

    return date;
  }
  
  function uploadHeight(string memory _name) public returns (string memory){
    require(bytes(_name).length > 0);
    mformCount++;
    require(msg.sender!=address(0));
    mforms[mformCount] = Form(_name);
    height = _name;
    //emit NameCreated(_name, msg.sender);

    return height;
  }
  
  function uploadWeight(string memory _name) public returns (string memory){
    require(bytes(_name).length > 0);
    mformCount++;
    require(msg.sender!=address(0));
    mforms[mformCount] = Form(_name);
    weight = _name;
    //emit NameCreated(_name, msg.sender);

    return weight;
  }
  
  function uploadBg(string memory _name) public returns (string memory){
    require(bytes(_name).length > 0);
    mformCount++;
    require(msg.sender!=address(0));
    mforms[mformCount] = Form(_name);
    blood = _name;
    //emit NameCreated(_name, msg.sender);

    return blood;
  }
  
  function uploadVacc(string memory _name) public returns (string memory){
    require(bytes(_name).length > 0);
    mformCount++;
    require(msg.sender!=address(0));
    mforms[mformCount] = Form(_name);
    vacc = _name;
    //emit NameCreated(_name, msg.sender);

    return vacc;
  }
  
  function uploadAller(string memory _name) public returns (string memory){
    require(bytes(_name).length > 0);
    mformCount++;
    require(msg.sender!=address(0));
    mforms[mformCount] = Form(_name);
    all = _name;
    //emit NameCreated(_name, msg.sender);

    return all;
  }
  
  function uploadPres(string memory _name) public returns (string memory){
    require(bytes(_name).length > 0);
    mformCount++;
    require(msg.sender!=address(0));
    mforms[mformCount] = Form(_name);
    pres = _name;
    //emit NameCreated(_name, msg.sender);

    return pres;
  }
  
  function uploadSym(string memory _name) public returns (string memory){
    require(bytes(_name).length > 0);
    mformCount++;
    require(msg.sender!=address(0));
    mforms[mformCount] = Form(_name);
    sym = _name;
    //emit NameCreated(_name, msg.sender);

    return sym;
  }
  
  function uploadTrav(string memory _name) public returns (string memory){
    require(bytes(_name).length > 0);
    mformCount++;
    require(msg.sender!=address(0));
    mforms[mformCount] = Form(_name);
    trav = _name;
    //emit NameCreated(_name, msg.sender);

    return trav;
  }
  
  function uploadHist(string memory _name) public returns (string memory){
    require(bytes(_name).length > 0);
    mformCount++;
    require(msg.sender!=address(0));
    mforms[mformCount] = Form(_name);
    his = _name;
    //emit NameCreated(_name, msg.sender);

    return his;
  }
  
  function uploadEmNam(string memory _name) public returns (string memory){
    require(bytes(_name).length > 0);
    mformCount++;
    require(msg.sender!=address(0));
    mforms[mformCount] = Form(_name);
    ename = _name;
    //emit NameCreated(_name, msg.sender);

    return ename;
  }
  
  function uploadEmNo(string memory _name) public returns (string memory){
    require(bytes(_name).length > 0);
    mformCount++;
    require(msg.sender!=address(0));
    mforms[mformCount] = Form(_name);
    eno = _name;
    //emit NameCreated(_name, msg.sender);

    return eno;
  }
  
  function uploadExt(string memory _name) public returns (string memory){
    require(bytes(_name).length > 0);
    mformCount++;
    require(msg.sender!=address(0));
    mforms[mformCount] = Form(_name);
    ex = _name;
    //emit NameCreated(_name, msg.sender);

    return ex;
  }

  function uploadDoc(string memory _docHash, string memory _description) public {
    // Make sure the image hash exists
    require(bytes(_docHash).length > 0);
    // Make sure image description exists
    require(bytes(_description).length > 0);
    // Make sure uploader address exists
    require(msg.sender!=address(0));

    // Increment image id
    docCount ++;

    // Add Image to the contract
    docs[docCount] = Doc(docCount, _docHash, _description, 0, msg.sender);
    // Trigger an event
    //emit DocCreated(docCount, _docHash, _description, 0, msg.sender);
  }

  function tipImageOwner(uint _id) public payable {
    // Make sure the id is valid
    require(_id > 0 && _id <= imageCount);
    // Fetch the image
    Image memory _image = images[_id];
    // Fetch the author
    address payable _author = _image.author;
    // Pay the author by sending them Ether
    address(_author).transfer(msg.value);
    // Increment the tip amount
    _image.tipAmount = _image.tipAmount + msg.value;
    // Update the image
    images[_id] = _image;
    // Trigger an event
    //emit ImageTipped(_id, _image.hash, _image.description, _image.tipAmount, _author);
  }
}
