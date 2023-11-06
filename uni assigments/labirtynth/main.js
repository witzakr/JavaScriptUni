console.clear();
let grid=[],path=[],stageName="stage 0",stageSetup=false;

const isValidPoint=(x,y)=>{
	if(y<0)return;
	if(x<0)return;
	if(y>=grid.length)return;
	if(x>=grid[y].length)return;
	return true;
}

const pathToGrid=(last=0)=>{
	let minx=0,miny=0,maxx=0,maxy=0;
	path.forEach(pt=>{
		const [x,y,d]=pt;
		minx=Math.min(x,minx);
		miny=Math.min(y,miny);
		maxx=Math.max(x,maxx);
		maxy=Math.max(y,maxy);
	});
	path.forEach(pt=>{
		pt[0]-=minx-last;
		pt[1]-=miny-last;
	});
	gx-=minx-last;
	gy-=miny-last;
	const rows=maxy-miny+1+2*last,cols=maxx-minx+1+2*last;
	grid=new Array(rows);
	for(let y=0;y<rows;y++){
		grid[y]=new Array(cols);
		for(let x=0;x<cols;x++){
			grid[y][x]=-2;//wall
		};
	};
	path.forEach(pt=>{
		const [x,y,d]=pt;
		grid[y][x]=d;
	})
}

const renderPath=(path,dest)=>{
	path.forEach(pt=>{
		const [x,y,d]=pt;
		let v;
		switch(d){
			case 0:v='\u25B8';break;//r
			case 1:v='\u25BE';break;//d
			case 2:v='\u25C2';break;//l
			case 3:v='\u25B4';break;//u
			case 4:v='>';break;//rr
			case 5:v='\u2228';break;//dd
			case 6:v='<';break;//ll
			case 7:v='\u2227';break;//uu					
		default:
			v='@';//'\u25FC ';
		};
		dest[y][x]=v;
	})
};

const renderGrid=()=>{
	const ret=grid.map(row=>row.map(col=>col));
	let s='%c\n';
	renderPath(path,ret);
	ret.forEach((row,y)=>{
		if(!y){
			s+="  ";
			row.forEach((v,x)=>s+=(x%10));
			s+="\n"
		};
		s+=(y%10)+'|';
		row.forEach((value,x)=>{
			switch(value){
				case -2://wall;
					s+='#';break;
				case -1://bush
					s+='@';break;
				default:s+=value||' ';
			};
		});
		s+='\n';
	});
	console.clear();
	console.log(stageName,stageSetup);
	console.log(s,'font-family:monospace;font-size:12pt;line-height:8pt');
	//return ret;
}

function wait(dt=500){
	const t=Date.now();
	while ((Date.now()-t)<dt);
}

var gx=0,gy=0,gdir=0;
path.push([gx,gy,gdir]);


function turn(dir){
	switch(dir){
		case "b":case "back" :dir= gdir=(gdir+2)%4;break;
		case "l":case "left" :dir= gdir=(gdir+3)%4;break;
		case "r":case "right":dir= gdir=(gdir+1)%4;break;
		default:
			console.warn(`invalid param ${dir}. Direction can be "back","left",or "right"`);
			return;
	};
	path.push([gx,gy,gdir]);
	if(!stageSetup){
		renderGrid();
		wait();
	};
	if(done()){
		console.warn('Stage complete!');
	};	
};

function look(dir,retType="string"){
	let dx=0,dy=0;
	switch(dir){
		case "f":case "front":dir= 0;break;
		case "b":case "back" :dir= 2;break;
		case "l":case "left" :dir= 3;break;
		case "r":case "right":dir= 1;break;
		default:
			console.warn(`invalid param ${dir}. Direction can be "front","back","left",or "right"`);
			return;
	};
	dir=(dir+gdir)%4;
	switch(dir){
		case 0:dx= 1;break;
		case 1:dy= 1;break;
		case 2:dx=-1;break;
		case 3:dy=-1;break;
	};
	if(!isValidPoint(gx+dx,gy+dy)){
		if(retType!='string'){
			return -3;
		};
		return 'out';
	};
	const v=grid[gy+dy][gx+dx];
	//console.log('look',{gx,gy,dx,dy,dir,v});
	if(retType!='string'){
		return v;
	};
	if(v===null){
		return 'clear';
	}else
	switch(v){
		case -1  :return 'bush';break;			
		case -2  :return 'wall';break;
		default	 :return 'self';
	};
	
}

function move(jump=false){
	let dx=0,dy=0;
	switch(gdir){
		case 0:dx= 1;break;
		case 1:dy= 1;break;
		case 2:dx=-1;break;
		case 3:dy=-1;break;
	};
	if(jump){
		if(!stageSetup && (look('front','native')<-1)){
			throw new Error('Can not jump over '+look('front'));
		};
		gx+=dx;
		gy+=dy;
		path.push([gx,gy,gdir+4]);
		if(stageSetup){
			pathToGrid();
			grid[gy][gx]=-1
		}else{
			renderGrid();		
			wait();
		};
	};
	if(!stageSetup && (look('front','native')<0)){
		throw new Error('Can not walk!'+look('front'));
	};
	if(((gx+dx)==path[0][0]) && ((gy+dy)==path[0][1])){
		throw new Error('Great(just being ironic)! We made it all the way back!');
	}
	//console.log('look in front:',look('front'),'(',look('front','native'),')',' and walk');
	gx+=dx;
	gy+=dy;
	path.push([gx,gy,gdir]);
	if(stageSetup){
		pathToGrid();
	}else{
		renderGrid();
		wait();
	};
	if(done()){
		console.warn('Stage complete!');
	};
}

function step(){
	move();
}
function jump(){
	move(true);
}

function done(){
	return finalPoint && (gx==finalPoint[0])&&(gy==finalPoint[1]);
}

let stageSolution;
let stageInit;
let finalPoint;
function showSolution(){
	stageInit();
	stageSolution();
}

function setupAsStage(name,stageFn){
	stageSetup=true;finalPoint=undefined;
	gx=0,gy=0,gdir=0;
	grid=[];path=[[gx,gy,gdir]];	
	stageFn();
	stageSolution=stageFn;
	pathToGrid(1);
	renderGrid();
	//console.log(JSON.stringify(grid));
	grid.forEach((row,y)=>{
		row.forEach((value,x)=>{
			switch(value){
				case -1: case -2:break;
				case  4: case 5: case 6: case 7:row[x]=-1;break;
				default:row[x]=null;
			};
		});
	});	
	stageName=name;
	finalPoint=path.pop();
	[gx,gy,gdir]=path[0];
	path=[[gx,gy,gdir]];
	const [sx,sy,sdir]=path[0];
	const sgrid=grid.map(row=>row.map(col=>col));
	stageInit=function(){
		[gx,gy,gdir]=[sx,sy,sdir];
		path=[[gx,gy,gdir]];
		grid=sgrid.map(row=>row.map(col=>col));
		renderGrid();		
		stageSetup=false;
	};
	stageInit();
	//console.log(grid,path,{gx,gy,gdir});
}



setupAsStage("Stage A", () => {

    for (let i = 0; i < 10; i++) {
      step();
    }
  
    turn('right');
    for (let j = 0; j < 8; j++) {
        step();
    }

    turn('back')
    for (let k = 0; k < 4; k++) {
        step();
    }

    turn('left')
    for (let l = 0; l < 10; l++) {
        step();
    }

    turn('left')
    for (let m = 0; m < 4; m++) {
        step();
    }

    turn('back')
    for (let n = 0; n < 7; n++) {
        step();
    }
  });
  
  
  
  
  
  
  


