

  let game_array = {}
  let game = document.getElementById("game")
  let ctx 
  let clickListener
  let intervalVarible
  const TimeConst = 90
  const need_for_win = 24

function initing() {
  game.innerHTML = ""
  game.append(...getFirstPage())
}
function get_random_color() 
{
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return color;
}

const devices = new RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini', "i"); 

function start_game() {

}

// wasd - 1
// arrows - 2
// gvbn - 3
// okl;- 4 
const map_cube_size = 27
const map_height = 30
const map_width = 50
function output_map(){
  for(var h=0;h<game_array.map.length;h++){
    for(var w = 0;w < game_array.map[h].length;w++){
      if(game_array.map[h][w] == 1){
        ctx.fillStyle="#bfbfbf";
        
        if(game_array.winer == 1)
        ctx.fillStyle= game_array.player1.head_color

        if(game_array.winer == 2)
        ctx.fillStyle= game_array.player2.head_color
        if(game_array.winer == 3)
        ctx.fillStyle= game_array?.player3?.head_color
        if(game_array.winer == 4)
        ctx.fillStyle= game_array.player4.head_color  
        ctx.fillRect(w*map_cube_size+2,h*map_cube_size+2,map_cube_size-2,map_cube_size-2);
      }
    }
  }
  if(!game_array.winer){
  ctx.fillStyle="#ff00c3";

  for(let o = 0; o < game_array.food.length; o++){    
    ctx.fillRect(game_array.food[o][0]*map_cube_size+2,game_array.food[o][1]*map_cube_size+2,map_cube_size-2,map_cube_size-2);
  }

  if(!game_array.is_was_toched && game_array.which_buff == 2){
    ctx.fillStyle="orange";
    ctx.fillRect(map_cube_size*((game_array.map[0].length )/2-1)+2,map_cube_size*((game_array.map.length )/2-1)+2,map_cube_size*2-2,map_cube_size*2-2);
  }
  
  if(!game_array.is_was_toched && game_array.which_buff == 1){
    ctx.fillStyle="white";
    ctx.fillRect(map_cube_size*((game_array.map[0].length )/2-1)+2,map_cube_size*((game_array.map.length )/2-1)+2,map_cube_size*2-2,map_cube_size*2-2);
  }
  if(!game_array.is_was_toched && game_array.which_buff == 3){
    ctx.fillStyle="red";
    ctx.fillRect(map_cube_size*((game_array.map[0].length )/2-1)+2,map_cube_size*((game_array.map.length )/2-1)+2,map_cube_size*2-2,map_cube_size*2-2);
  }
}
}

const immortal_color = "orange"
const fire_color = "red"


function outputlayer(player) {
  if(player == 1) {
    for(let hh = 0; hh < game_array.player1.tail.length; hh++) {
      ctx.fillStyle=game_array.player1.color;
      if(game_array.is_active_immortal > 0 && game_array.who_have_immortal == 1)
      ctx.fillStyle=immortal_color;
      ctx.fillRect(game_array.player1.tail[hh][0]*map_cube_size+2,game_array.player1.tail[hh][1]*map_cube_size+2,map_cube_size-2,map_cube_size-2);
    }
    ctx.fillStyle=game_array.player1.head_color;
    ctx.fillRect(game_array.player1.head[0]*map_cube_size+2,game_array.player1.head[1]*map_cube_size+2,map_cube_size-2,map_cube_size-2);
  }
  if(player == 2) {
    for(let hh = 0; hh < game_array.player2.tail.length; hh++) {
      ctx.fillStyle=game_array.player2.color;
      if(game_array.is_active_immortal > 0 && game_array.who_have_immortal == 2)
      ctx.fillStyle=immortal_color;
      ctx.fillRect(game_array.player2.tail[hh][0]*map_cube_size+2,game_array.player2.tail[hh][1]*map_cube_size+2,map_cube_size-2,map_cube_size-2);
    }
    ctx.fillStyle=game_array.player2.head_color;
    ctx.fillRect(game_array.player2.head[0]*map_cube_size+2,game_array.player2.head[1]*map_cube_size+2,map_cube_size-2,map_cube_size-2);
  }
  if(player == 3) {
    for(let hh = 0; hh < game_array.player3.tail.length; hh++) {
      ctx.fillStyle=game_array.player3.color;
      if(game_array.is_active_immortal > 0 && game_array.who_have_immortal == 3)
      ctx.fillStyle=immortal_color;
      ctx.fillRect(game_array.player3.tail[hh][0]*map_cube_size+2,game_array.player3.tail[hh][1]*map_cube_size+2,map_cube_size-2,map_cube_size-2);
    } 
    ctx.fillStyle=game_array.player3.head_color;
    ctx.fillRect(game_array.player3.head[0]*map_cube_size+2,game_array.player3.head[1]*map_cube_size+2,map_cube_size-2,map_cube_size-2);
  }
  if(player == 4) {
    for(let hh = 0; hh < game_array.player4.tail.length; hh++) {
      ctx.fillStyle=game_array.player4.color;
      if(game_array.is_active_immortal > 0 && game_array.who_have_immortal == 4)
      ctx.fillStyle=immortal_color;
      ctx.fillRect(game_array.player4.tail[hh][0]*map_cube_size+2,game_array.player4.tail[hh][1]*map_cube_size+2,map_cube_size-2,map_cube_size-2);
    } 
    ctx.fillStyle=game_array.player4.head_color;
    ctx.fillRect(game_array.player4.head[0]*map_cube_size+2,game_array.player4.head[1]*map_cube_size+2,map_cube_size-2,map_cube_size-2);
  }
  if(game_array.is_fire_active > 0 && game_array.who_have_fire_buff == 1) {
      ctx.fillStyle=fire_color;
      ctx.fillRect(game_array.player1.head[0]*map_cube_size+2+(map_cube_size * game_array.player1.x),game_array.player1.head[1]*map_cube_size+2+(map_cube_size * game_array.player1.y),map_cube_size-2,map_cube_size-2);
      if(game_array.player1.x == 1 || game_array.player1.x == -1 ){
      for(let gg = -1; gg < 2;gg++)
      ctx.fillRect(game_array.player1.head[0]*map_cube_size+2+(map_cube_size * game_array.player1.x +map_cube_size * game_array.player1.x),game_array.player1.head[1]*map_cube_size+2+(map_cube_size * game_array.player1.y + gg * map_cube_size),map_cube_size-2,map_cube_size-2);
      for(let gg = -2; gg < 3;gg++)
      ctx.fillRect(game_array.player1.head[0]*map_cube_size+2+(map_cube_size * game_array.player1.x +map_cube_size * game_array.player1.x +map_cube_size * game_array.player1.x),game_array.player1.head[1]*map_cube_size+2+(map_cube_size * game_array.player1.y + gg * map_cube_size),map_cube_size-2,map_cube_size-2);
      for(let gg = -3; gg < 4;gg++)
      ctx.fillRect(game_array.player1.head[0]*map_cube_size+2+(map_cube_size * game_array.player1.x+map_cube_size * game_array.player1.x +map_cube_size * game_array.player1.x +map_cube_size * game_array.player1.x),game_array.player1.head[1]*map_cube_size+2+(map_cube_size * game_array.player1.y + gg * map_cube_size),map_cube_size-2,map_cube_size-2);
    }
    if(game_array.player1.y == 1 || game_array.player1.y == -1 ){
      for(let gg = -1; gg < 2;gg++)
      ctx.fillRect(game_array.player1.head[0]*map_cube_size+2+(map_cube_size * game_array.player1.x + gg * map_cube_size),
      game_array.player1.head[1]*map_cube_size+2+(map_cube_size * game_array.player1.y + map_cube_size * game_array.player1.y ),
      map_cube_size-2,map_cube_size-2);
      for(let gg = -2; gg < 3;gg++)
      ctx.fillRect(game_array.player1.head[0]*map_cube_size+2+(map_cube_size * game_array.player1.x + gg * map_cube_size),
      game_array.player1.head[1]*map_cube_size+2+(map_cube_size * game_array.player1.y + map_cube_size * game_array.player1.y + map_cube_size * game_array.player1.y),
      map_cube_size-2,map_cube_size-2);
      for(let gg = -3; gg < 4;gg++)
      ctx.fillRect(game_array.player1.head[0]*map_cube_size+2+(map_cube_size * game_array.player1.x + gg * map_cube_size),
      game_array.player1.head[1]*map_cube_size+2+(map_cube_size * game_array.player1.y + map_cube_size * game_array.player1.y + map_cube_size * game_array.player1.y + map_cube_size * game_array.player1.y),
      map_cube_size-2,map_cube_size-2);}
    }
    if(game_array.is_fire_active > 0 && game_array.who_have_fire_buff == 2) {
      ctx.fillStyle=fire_color;
      ctx.fillRect(game_array.player2.head[0]*map_cube_size+2+(map_cube_size * game_array.player2.x),game_array.player2.head[1]*map_cube_size+2+(map_cube_size * game_array.player2.y),map_cube_size-2,map_cube_size-2);
      if(game_array.player2.x == 1 || game_array.player2.x == -1 ){
      for(let gg = -1; gg < 2;gg++)
      ctx.fillRect(game_array.player2.head[0]*map_cube_size+2+(map_cube_size * game_array.player2.x +map_cube_size * game_array.player2.x),game_array.player2.head[1]*map_cube_size+2+(map_cube_size * game_array.player2.y + gg * map_cube_size),map_cube_size-2,map_cube_size-2);
      for(let gg = -2; gg < 3;gg++)
      ctx.fillRect(game_array.player2.head[0]*map_cube_size+2+(map_cube_size * game_array.player2.x +map_cube_size * game_array.player2.x +map_cube_size * game_array.player2.x),game_array.player2.head[1]*map_cube_size+2+(map_cube_size * game_array.player2.y + gg * map_cube_size),map_cube_size-2,map_cube_size-2);
      for(let gg = -3; gg < 4;gg++)
      ctx.fillRect(game_array.player2.head[0]*map_cube_size+2+(map_cube_size * game_array.player2.x+map_cube_size * game_array.player2.x +map_cube_size * game_array.player2.x +map_cube_size * game_array.player2.x),game_array.player2.head[1]*map_cube_size+2+(map_cube_size * game_array.player2.y + gg * map_cube_size),map_cube_size-2,map_cube_size-2);
    }
    if(game_array.player2.y == 1 || game_array.player2.y == -1 ){
      for(let gg = -1; gg < 2;gg++)
      ctx.fillRect(game_array.player2.head[0]*map_cube_size+2+(map_cube_size * game_array.player2.x + gg * map_cube_size),
      game_array.player2.head[1]*map_cube_size+2+(map_cube_size * game_array.player2.y + map_cube_size * game_array.player2.y ),
      map_cube_size-2,map_cube_size-2);
      for(let gg = -2; gg < 3;gg++)
      ctx.fillRect(game_array.player2.head[0]*map_cube_size+2+(map_cube_size * game_array.player2.x + gg * map_cube_size),
      game_array.player2.head[1]*map_cube_size+2+(map_cube_size * game_array.player2.y + map_cube_size * game_array.player2.y + map_cube_size * game_array.player2.y),
      map_cube_size-2,map_cube_size-2);
      for(let gg = -3; gg < 4;gg++)
      ctx.fillRect(game_array.player2.head[0]*map_cube_size+2+(map_cube_size * game_array.player2.x + gg * map_cube_size),
      game_array.player2.head[1]*map_cube_size+2+(map_cube_size * game_array.player2.y + map_cube_size * game_array.player2.y + map_cube_size * game_array.player2.y + map_cube_size * game_array.player2.y),
      map_cube_size-2,map_cube_size-2);
    }
    }
    if(game_array.is_fire_active > 0 && game_array.who_have_fire_buff == 3) {
      ctx.fillStyle=fire_color;
      ctx.fillRect(game_array.player3.head[0]*map_cube_size+2+(map_cube_size * game_array.player3.x),game_array.player3.head[1]*map_cube_size+2+(map_cube_size * game_array.player3.y),map_cube_size-2,map_cube_size-2);
      if(game_array.player3.x == 1 || game_array.player3.x == -1 ){
      for(let gg = -1; gg < 2;gg++)
      ctx.fillRect(game_array.player3.head[0]*map_cube_size+2+(map_cube_size * game_array.player3.x +map_cube_size * game_array.player3.x),game_array.player3.head[1]*map_cube_size+2+(map_cube_size * game_array.player3.y + gg * map_cube_size),map_cube_size-2,map_cube_size-2);
      for(let gg = -2; gg < 3;gg++)
      ctx.fillRect(game_array.player3.head[0]*map_cube_size+2+(map_cube_size * game_array.player3.x +map_cube_size * game_array.player3.x +map_cube_size * game_array.player3.x),game_array.player3.head[1]*map_cube_size+2+(map_cube_size * game_array.player3.y + gg * map_cube_size),map_cube_size-2,map_cube_size-2);
      for(let gg = -3; gg < 4;gg++)
      ctx.fillRect(game_array.player3.head[0]*map_cube_size+2+(map_cube_size * game_array.player3.x+map_cube_size * game_array.player3.x +map_cube_size * game_array.player3.x +map_cube_size * game_array.player3.x),game_array.player3.head[1]*map_cube_size+2+(map_cube_size * game_array.player3.y + gg * map_cube_size),map_cube_size-2,map_cube_size-2);
    }
    if(game_array.player3.y == 1 || game_array.player3.y == -1 ){
      for(let gg = -1; gg < 2;gg++)
      ctx.fillRect(game_array.player3.head[0]*map_cube_size+2+(map_cube_size * game_array.player3.x + gg * map_cube_size),
      game_array.player3.head[1]*map_cube_size+2+(map_cube_size * game_array.player3.y + map_cube_size * game_array.player3.y ),
      map_cube_size-2,map_cube_size-2);
      for(let gg = -2; gg < 3;gg++)
      ctx.fillRect(game_array.player3.head[0]*map_cube_size+2+(map_cube_size * game_array.player3.x + gg * map_cube_size),
      game_array.player3.head[1]*map_cube_size+2+(map_cube_size * game_array.player3.y + map_cube_size * game_array.player3.y + map_cube_size * game_array.player3.y),
      map_cube_size-2,map_cube_size-2);
      for(let gg = -3; gg < 4;gg++)
      ctx.fillRect(game_array.player3.head[0]*map_cube_size+2+(map_cube_size * game_array.player3.x + gg * map_cube_size),
      game_array.player3.head[1]*map_cube_size+2+(map_cube_size * game_array.player3.y + map_cube_size * game_array.player3.y + map_cube_size * game_array.player3.y + map_cube_size * game_array.player3.y),
      map_cube_size-2,map_cube_size-2);
    }
    }
    if(game_array.is_fire_active > 0 && game_array.who_have_fire_buff == 4) {
      ctx.fillStyle=fire_color;
      ctx.fillRect(game_array.player4.head[0]*map_cube_size+2+(map_cube_size * game_array.player4.x),game_array.player4.head[1]*map_cube_size+2+(map_cube_size * game_array.player4.y),map_cube_size-2,map_cube_size-2);
      if(game_array.player4.x == 1 || game_array.player4.x == -1 ){
      for(let gg = -1; gg < 2;gg++)
      ctx.fillRect(game_array.player4.head[0]*map_cube_size+2+(map_cube_size * game_array.player4.x +map_cube_size * game_array.player4.x),game_array.player4.head[1]*map_cube_size+2+(map_cube_size * game_array.player4.y + gg * map_cube_size),map_cube_size-2,map_cube_size-2);
      for(let gg = -2; gg < 3;gg++)
      ctx.fillRect(game_array.player4.head[0]*map_cube_size+2+(map_cube_size * game_array.player4.x +map_cube_size * game_array.player4.x +map_cube_size * game_array.player4.x),game_array.player4.head[1]*map_cube_size+2+(map_cube_size * game_array.player4.y + gg * map_cube_size),map_cube_size-2,map_cube_size-2);
      for(let gg = -3; gg < 4;gg++)
      ctx.fillRect(game_array.player4.head[0]*map_cube_size+2+(map_cube_size * game_array.player4.x+map_cube_size * game_array.player4.x +map_cube_size * game_array.player4.x +map_cube_size * game_array.player4.x),game_array.player4.head[1]*map_cube_size+2+(map_cube_size * game_array.player4.y + gg * map_cube_size),map_cube_size-2,map_cube_size-2);
    }
    if(game_array.player4.y == 1 || game_array.player4.y == -1 ){
      for(let gg = -1; gg < 2;gg++)
      ctx.fillRect(game_array.player4.head[0]*map_cube_size+2+(map_cube_size * game_array.player4.x + gg * map_cube_size),
      game_array.player4.head[1]*map_cube_size+2+(map_cube_size * game_array.player4.y + map_cube_size * game_array.player4.y ),
      map_cube_size-2,map_cube_size-2);
      for(let gg = -2; gg < 3;gg++)
      ctx.fillRect(game_array.player4.head[0]*map_cube_size+2+(map_cube_size * game_array.player4.x + gg * map_cube_size),
      game_array.player4.head[1]*map_cube_size+2+(map_cube_size * game_array.player4.y + map_cube_size * game_array.player4.y + map_cube_size * game_array.player4.y),
      map_cube_size-2,map_cube_size-2);
      for(let gg = -3; gg < 4;gg++)
      ctx.fillRect(game_array.player4.head[0]*map_cube_size+2+(map_cube_size * game_array.player4.x + gg * map_cube_size),
      game_array.player4.head[1]*map_cube_size+2+(map_cube_size * game_array.player4.y + map_cube_size * game_array.player4.y + map_cube_size * game_array.player4.y + map_cube_size * game_array.player4.y),
      map_cube_size-2,map_cube_size-2);
    }
    }
}

function check_on_hit_tails(player){
  let array_of_all_tails = [];
  for ( let k = 0; k < game_array.player1.tail.length; k++ ) 
    array_of_all_tails.push(game_array.player1.tail[k])
  for ( let k = 0; k < game_array.player2.tail.length; k++ ) 
    array_of_all_tails.push(game_array.player2.tail[k])
    if(game_array?.player3?.tail)
  for ( let k = 0; k < game_array.player3.tail.length; k++ ) 
    array_of_all_tails.push(game_array.player3.tail[k])
    if(game_array?.player4?.tail)
  for ( let k = 0; k < game_array.player4.tail.length; k++ ) 
    array_of_all_tails.push(game_array.player4.tail[k])
  let new_head_cor = [player.head[0]+player.x,player.head[1]+player.y]
  for(let p = 0; p < array_of_all_tails.length; p++){
    if(array_of_all_tails[p][0] == new_head_cor[0] && array_of_all_tails[p][1] == new_head_cor[1])
      return true
  }
  return false
}


function head_on_map(x,y){
  if(game_array.map[y][x] == 1)
    return 1
  return 0
}

function find_best_from_left(x, y) {
  for(let oo = 0; oo < game_array.map[y].length;oo++){
    if(game_array.map[y][oo] == 0)
      return([oo, y])
  }
} 


function find_best_from_right(x, y) {
  for(let oo = game_array.map[y].length-1; oo > -1;oo--){
    if(game_array.map[y][oo] == 0)
      return([oo, y])
  }
} 

function find_best_from_top(x, y) {
  for(let oo = 0; oo < game_array.map.length;oo++){
    if(game_array.map[oo][x] == 0)
      return([x, oo])
  }
} 

function find_best_from_bottom(x, y) {
  for(let oo = game_array.map.length-1; oo > -1;oo--){
    if(game_array.map[oo][x] == 0)
      return([x, oo])
  }
} 

function getRandomIntFrom1(max) {
  let hh = 0;
  while( !hh)
  hh = Math.floor(Math.random() * Math.floor(max));
  return hh

}


function generete_buf(){
  let player_len = 0;
  if(game_array.player1.tail.length > player_len){
    player_len = game_array.player1.tail.length;
  }
  if(game_array.player2.tail.length > player_len){
    player_len = game_array.player2.tail.length - 1;
  }
  if(game_array?.player3?.tail?.length > player_len){
    player_len = game_array.player3.tail.length - 1;
  }
  if(game_array?.player4?.tail?.length > player_len){
    player_len = game_array.player4.tail.length - 1;
  }
  if(player_len > game_array.max_was_before_break_count &&( player_len%game_array.break_point == 0)){
    game_array.max_was_before_break_count = player_len;
    let gg = game_array.which_buff
    while(game_array.which_buff==gg){
    game_array.which_buff = getRandomIntFrom1(4);
    game_array.is_was_toched = 0
    }
 

  }
}


function check_on_center_coordinat_buf(jj) {
  if( (((jj[0]==((game_array.map[0].length )/2))  || jj[0]==((game_array.map[0].length )/2) - 1)) && (((jj[1]==((game_array.map.length )/2))  || jj[1]==((game_array.map.length)/2) - 1)) && game_array.which_buff > 0 && !game_array.is_was_toched) 
  return true
  return false

}

const duration_ice = 50;
const duration_immortal = 140;
const duration_fire = 50;


function move_player(num) {
  generete_buf();
 
  if(num == 1 ) {
    game_array.player1.head = [game_array.player1.head[0] + game_array.player1.x,game_array.player1.head[1] + game_array.player1.y];
    if (check_on_center_coordinat_buf(game_array.player1.head)){
      game_array.is_was_toched = 1;
      if (game_array.which_buff == 1) {
      game_array.is_ice_active = duration_ice;//ice
      game_array.who_have_ice_buff = 1;
      }
      if (game_array.which_buff == 2) {
      game_array.is_active_immortal = duration_immortal;//immortal
      game_array.who_have_immortal = 1;
      }
      if (game_array.which_buff == 3) {

      game_array.is_fire_active = duration_fire;//fire
      game_array.who_have_fire_buff = 1;
      }
    }

    if(game_array.player1.head[0]  < 0) {
      game_array.player1.head = find_best_from_right(game_array.player1.head[0],game_array.player1.head[1])
    }
    if(game_array.player1.head[0]  > game_array.map[0].length-1) {
      game_array.player1.head=find_best_from_left(game_array.player1.head[0],game_array.player1.head[1])
    }
    if(game_array.player1.head[1]  < 0 ) {
      game_array.player1.head=find_best_from_bottom(game_array.player1.head[0],game_array.player1.head[1])
    }
    if(game_array.player1.head[1]  > game_array.map.length -1) {
      game_array.player1.head = find_best_from_top(game_array.player1.head[0],game_array.player1.head[1])
    }
    if(head_on_map(game_array.player1.head[0],game_array.player1.head[1])) {
      
      
      if(game_array.player1.x == 1){
        game_array.player1.head=find_best_from_left(game_array.player1.head[0],game_array.player1.head[1])
      }
      if(game_array.player1.x == -1){
        game_array.player1.head = find_best_from_right(game_array.player1.head[0],game_array.player1.head[1])
      }
      if(game_array.player1.y == 1){
        game_array.player1.head=find_best_from_top(game_array.player1.head[0],game_array.player1.head[1])
      }
      if(game_array.player1.y == -1){
        game_array.player1.head = find_best_from_bottom(game_array.player1.head[0],game_array.player1.head[1])
      }
    }
    for(let gg = 0; gg < game_array.food.length; gg++) {
      if(game_array.food[gg][0] == game_array.player1.head[0] && game_array.food[gg][1] == game_array.player1.head[1]) {
        game_array.player1.tail.push(game_array.player1.tail[game_array.player1.tail.length - 1]) 
        game_array.food.splice(gg, 1);
      }
    }

    for(let yy = game_array.player1.tail.length; yy >= 0 ;yy--){
      if(yy == 0)
      game_array.player1.tail[0] = game_array.player1.head
      else
      game_array.player1.tail[yy - 1] = game_array.player1.tail[yy - 2]
      
    }
  }
  if(num == 2) {

    game_array.player2.head = [game_array.player2.head[0] + game_array.player2.x,game_array.player2.head[1] + game_array.player2.y];
    
    if (check_on_center_coordinat_buf(game_array.player2.head)){
      game_array.is_was_toched = 1;
      if (game_array.which_buff == 1) {
      game_array.is_ice_active = duration_ice;//ice
      game_array.who_have_ice_buff = 2;
      }
      if (game_array.which_buff == 2) {
      game_array.is_active_immortal = duration_immortal;//immortal
      game_array.who_have_immortal = 2;
      }
      if (game_array.which_buff == 3) {

      game_array.is_fire_active = duration_fire;//fire
      game_array.who_have_fire_buff = 2;
      }
    }
    if(game_array.player2.head[0]  < 0) {
      game_array.player2.head = find_best_from_right(game_array.player2.head[0],game_array.player2.head[1])
    }
    if(game_array.player2.head[0]  > game_array.map[0].length-1) {
      game_array.player2.head=find_best_from_left(game_array.player2.head[0],game_array.player2.head[1])
    }
    if(game_array.player2.head[1]  < 0 ) {
      game_array.player2.head=find_best_from_bottom(game_array.player2.head[0],game_array.player2.head[1])
    }
    if(game_array.player2.head[1]  > game_array.map.length -1) {
      game_array.player2.head = find_best_from_top(game_array.player2.head[0],game_array.player2.head[1])
    }
    if(head_on_map(game_array.player2.head[0],game_array.player2.head[1])) {
      
      
      if(game_array.player2.x == 1){
        game_array.player2.head=find_best_from_left(game_array.player2.head[0],game_array.player2.head[1])
      }
      if(game_array.player2.x == -1){
        game_array.player2.head = find_best_from_right(game_array.player2.head[0],game_array.player2.head[1])
      }
      if(game_array.player2.y == 1){
        game_array.player2.head=find_best_from_top(game_array.player2.head[0],game_array.player2.head[1])
      }
      if(game_array.player2.y == -1){
        game_array.player2.head = find_best_from_bottom(game_array.player2.head[0],game_array.player2.head[1])
      }
    }
    for(let gg = 0; gg < game_array.food.length; gg++) {
      if(game_array.food[gg][0] == game_array.player2.head[0] && game_array.food[gg][1] == game_array.player2.head[1]) {
        game_array.player2.tail.push(game_array.player2.tail[game_array.player2.tail.length - 1]) 
        game_array.food.splice(gg, 1);
      }
    }

    for(let yy = game_array.player2.tail.length; yy >= 0 ;yy--){
      if(yy == 0)
      game_array.player2.tail[0] = game_array.player2.head
      else
      game_array.player2.tail[yy - 1] = game_array.player2.tail[yy - 2]
      
    }
  }
  if(num == 3) {

game_array.player3.head = [game_array.player3.head[0] + game_array.player3.x,game_array.player3.head[1] + game_array.player3.y];

if (check_on_center_coordinat_buf(game_array.player3.head)){
  game_array.is_was_toched = 1;
  if (game_array.which_buff == 1) {
  game_array.is_ice_active = duration_ice;//ice
  game_array.who_have_ice_buff = 3;
  }
  if (game_array.which_buff == 2) {
  game_array.is_active_immortal = duration_immortal;//immortal
  game_array.who_have_immortal = 3;
  }
  if (game_array.which_buff == 3) {

  game_array.is_fire_active = duration_fire;//fire
  game_array.who_have_fire_buff = 3;
  }
}
if(game_array.player3.head[0]  < 0) {
  game_array.player3.head = find_best_from_right(game_array.player3.head[0],game_array.player3.head[1])
}
if(game_array.player3.head[0]  > game_array.map[0].length-1) {
  game_array.player3.head=find_best_from_left(game_array.player3.head[0],game_array.player3.head[1])
}
if(game_array.player3.head[1]  < 0 ) {
  game_array.player3.head=find_best_from_bottom(game_array.player3.head[0],game_array.player3.head[1])
}
if(game_array.player3.head[1]  > game_array.map.length -1) {
  game_array.player3.head = find_best_from_top(game_array.player3.head[0],game_array.player3.head[1])
}
if(head_on_map(game_array.player3.head[0],game_array.player3.head[1])) {
  
  
  if(game_array.player3.x == 1){
    game_array.player3.head=find_best_from_left(game_array.player3.head[0],game_array.player3.head[1])
  }
  if(game_array.player3.x == -1){
    game_array.player3.head = find_best_from_right(game_array.player3.head[0],game_array.player3.head[1])
  }
  if(game_array.player3.y == 1){
    game_array.player3.head=find_best_from_top(game_array.player3.head[0],game_array.player3.head[1])
  }
  if(game_array.player3.y == -1){
    game_array.player3.head = find_best_from_bottom(game_array.player3.head[0],game_array.player3.head[1])
  }
}
for(let gg = 0; gg < game_array.food.length; gg++) {
  if(game_array.food[gg][0] == game_array.player3.head[0] && game_array.food[gg][1] == game_array.player3.head[1]) {
    game_array.player3.tail.push(game_array.player3.tail[game_array.player3.tail.length - 1]) 
    game_array.food.splice(gg, 1);
  }
}

for(let yy = game_array.player3.tail.length; yy >= 0 ;yy--){
  if(yy == 0)
  game_array.player3.tail[0] = game_array.player3.head
  else
  game_array.player3.tail[yy - 1] = game_array.player3.tail[yy - 2]
  

}
}
if(num == 4) {

game_array.player4.head = [game_array.player4.head[0] + game_array.player4.x,game_array.player4.head[1] + game_array.player4.y];

if (check_on_center_coordinat_buf(game_array.player4.head)){
  game_array.is_was_toched = 1;
  if (game_array.which_buff == 1) {
  game_array.is_ice_active = duration_ice;//ice
  game_array.who_have_ice_buff = 4;
  }
  if (game_array.which_buff == 2) {
  game_array.is_active_immortal = duration_immortal;//immortal
  game_array.who_have_immortal = 4;
  }
  if (game_array.which_buff == 3) {

  game_array.is_fire_active = duration_fire;//fire
  game_array.who_have_fire_buff = 4;
  }
}
if(game_array.player4.head[0]  < 0) {
  game_array.player4.head = find_best_from_right(game_array.player4.head[0],game_array.player4.head[1])
}
if(game_array.player4.head[0]  > game_array.map[0].length-1) {
  game_array.player4.head=find_best_from_left(game_array.player4.head[0],game_array.player4.head[1])
}
if(game_array.player4.head[1]  < 0 ) {
  game_array.player4.head=find_best_from_bottom(game_array.player4.head[0],game_array.player4.head[1])
}
if(game_array.player4.head[1]  > game_array.map.length -1) {
  game_array.player4.head = find_best_from_top(game_array.player4.head[0],game_array.player4.head[1])
}
if(head_on_map(game_array.player4.head[0],game_array.player4.head[1])) {
  
  
  if(game_array.player4.x == 1){
    game_array.player4.head=find_best_from_left(game_array.player4.head[0],game_array.player4.head[1])
  }
  if(game_array.player4.x == -1){
    game_array.player4.head = find_best_from_right(game_array.player4.head[0],game_array.player4.head[1])
  }
  if(game_array.player4.y == 1){
    game_array.player4.head=find_best_from_top(game_array.player4.head[0],game_array.player4.head[1])
  }
  if(game_array.player4.y == -1){
    game_array.player4.head = find_best_from_bottom(game_array.player4.head[0],game_array.player4.head[1])
  }
}
for(let gg = 0; gg < game_array.food.length; gg++) {
  if(game_array.food[gg][0] == game_array.player4.head[0] && game_array.food[gg][1] == game_array.player4.head[1]) {
    game_array.player4.tail.push(game_array.player4.tail[game_array.player4.tail.length - 1]) 
    game_array.food.splice(gg, 1);
  }
}

for(let yy = game_array.player4.tail.length; yy >= 0 ;yy--){
  if(yy == 0)
  game_array.player4.tail[0] = game_array.player4.head
  else
  game_array.player4.tail[yy - 1] = game_array.player4.tail[yy - 2]
  

}
}
}

function get_coordinats_of_all_tails() {
  let array_of_tails = []
  array_of_tails.push(game_array?.player1?.tail)
  array_of_tails.push(game_array?.player2?.tail)
  array_of_tails.push(game_array?.player3?.tail)
  array_of_tails.push(game_array?.player4?.tail)
  let array_for_return = []
  for(let ll = 0; ll < array_of_tails.length; ll++){   
    if(array_of_tails[ll] != undefined)
    for(let lll = 0; lll < array_of_tails[ll].length; lll++){
      array_for_return.push(array_of_tails[ll][lll])
    }
  }
  return array_for_return
}

function get_coordinats_of_free_map() {
  let arr_for_return = []
  for(let i = 0; i < game_array.map.length; i++){
    for(let ii = 0; ii < game_array.map[i].length; ii++){
      if(game_array.map[i][ii] == 0)
        arr_for_return.push([ii, i])
    } 
  }
  return arr_for_return
}



function generete_food(){
  if(game_array.food.length < game_array.players ){
    let array_of_tails = get_coordinats_of_all_tails();
    let array_of_0map = get_coordinats_of_free_map(); 
    let array_of_posible = []
    
      for(let xx = 0; xx < array_of_0map.length; xx++){
        let was_in_array = 0;
        for(let yy = 0; yy < array_of_tails.length; yy++) {
            if(array_of_0map[xx][0] == array_of_tails[yy][0] && array_of_0map[xx][1] == array_of_tails[yy][1])
            was_in_array = 1;
        }
        if(!was_in_array)
          array_of_posible.push(array_of_0map[xx])
      }

      while(game_array.food.length < game_array.players) {
        let rand = Math.floor(Math.random()*array_of_posible.length);
        game_array.food.push( array_of_posible[rand])
        array_of_posible.splice(rand,1);
      }
    }
  }


function do_static_work() {
  game_array.player1.can_move = 1
  game_array.player2.can_move = 1
  if(game_array.player3)
  game_array.player3.can_move = 1
  if(game_array.player4)
  game_array.player4.can_move = 1
}

function check_on_hit_fire(player){
  if(game_array.is_fire_active < 1)
    return false
  if(player == 1 && game_array.who_have_fire_buff == 1)
    return false
  if(player == 2 && game_array.who_have_fire_buff == 2)
    return false
    if(player == 3 && game_array.who_have_fire_buff == 3)
    return false
    if(player == 4 && game_array.who_have_fire_buff == 4)
    return false
  let danger_array = []
  if(game_array.who_have_fire_buff == 1){
    danger_array.push([game_array.player1.head[0]+game_array.player1.x,game_array.player1.head[1]+game_array.player1.y] )
    if(game_array.player1.x == 1 || game_array.player1.x == -1 ){
      for(let gg = -1; gg < 2;gg++)
      danger_array.push([game_array.player1.head[0]+game_array.player1.x+game_array.player1.x, 
      game_array.player1.head[1]+ game_array.player1.y + gg ])
      for(let gg = -2; gg < 3;gg++)
      danger_array.push([game_array.player1.head[0]+game_array.player1.x+game_array.player1.x+game_array.player1.x, 
      game_array.player1.head[1]+ game_array.player1.y + gg ])
      for(let gg = -3; gg < 4;gg++)
      danger_array.push([game_array.player1.head[0]+game_array.player1.x+game_array.player1.x+game_array.player1.x+game_array.player1.x, 
      game_array.player1.head[1]+ game_array.player1.y + gg ])
    }
    if(game_array.player1.y == 1 || game_array.player1.y == -1 ){
      for(let gg = -1; gg < 2;gg++)
      danger_array.push([game_array.player1.head[0]+game_array.player1.x+gg, 
      game_array.player1.head[1]+ game_array.player1.y + game_array.player1.y ])
      for(let gg = -2; gg < 3;gg++)
      danger_array.push([game_array.player1.head[0]+game_array.player1.x+gg, 
      game_array.player1.head[1]+ game_array.player1.y + game_array.player1.y + game_array.player1.y ])
      for(let gg = -3; gg < 4;gg++)
      danger_array.push([game_array.player1.head[0]+game_array.player1.x+gg, 
      game_array.player1.head[1]+ game_array.player1.y + game_array.player1.y + game_array.player1.y + game_array.player1.y ])
    }
  }
  if(game_array.who_have_fire_buff == 2){
    danger_array.push([game_array.player2.head[0]+game_array.player2.x,game_array.player2.head[1]+game_array.player2.y] )
    if(game_array.player2.x == 1 || game_array.player2.x == -1 ){
      for(let gg = -1; gg < 2;gg++)
      danger_array.push([game_array.player2.head[0]+game_array.player2.x+game_array.player2.x, 
      game_array.player2.head[1]+ game_array.player2.y + gg ])
      for(let gg = -2; gg < 3;gg++)
      danger_array.push([game_array.player2.head[0]+game_array.player2.x+game_array.player2.x+game_array.player2.x, 
      game_array.player2.head[1]+ game_array.player2.y + gg ])
      for(let gg = -3; gg < 4;gg++)
      danger_array.push([game_array.player2.head[0]+game_array.player2.x+game_array.player2.x+game_array.player2.x+game_array.player2.x, 
      game_array.player2.head[1]+ game_array.player2.y + gg ])
    }
    if(game_array.player2.y == 1 || game_array.player2.y == -1 ){
      for(let gg = -1; gg < 2;gg++)
      danger_array.push([game_array.player2.head[0]+game_array.player2.x+gg, 
      game_array.player2.head[1]+ game_array.player2.y + game_array.player2.y ])
      for(let gg = -2; gg < 3;gg++)
      danger_array.push([game_array.player2.head[0]+game_array.player2.x+gg, 
      game_array.player2.head[1]+ game_array.player2.y + game_array.player2.y + game_array.player2.y ])
      for(let gg = -3; gg < 4;gg++)
      danger_array.push([game_array.player2.head[0]+game_array.player2.x+gg, 
      game_array.player2.head[1]+ game_array.player2.y + game_array.player2.y + game_array.player2.y + game_array.player2.y ])
    }
  }
  if(game_array.who_have_fire_buff == 3){
    danger_array.push([game_array.player3.head[0]+game_array.player3.x,game_array.player3.head[1]+game_array.player3.y] )
    if(game_array.player3.x == 1 || game_array.player3.x == -1 ){
      for(let gg = -1; gg < 2;gg++)
      danger_array.push([game_array.player3.head[0]+game_array.player3.x+game_array.player3.x, 
      game_array.player3.head[1]+ game_array.player3.y + gg ])
      for(let gg = -2; gg < 3;gg++)
      danger_array.push([game_array.player3.head[0]+game_array.player3.x+game_array.player3.x+game_array.player3.x, 
      game_array.player3.head[1]+ game_array.player3.y + gg ])
      for(let gg = -3; gg < 4;gg++)
      danger_array.push([game_array.player3.head[0]+game_array.player3.x+game_array.player3.x+game_array.player3.x+game_array.player3.x, 
      game_array.player3.head[1]+ game_array.player3.y + gg ])
    }
    if(game_array.player3.y == 1 || game_array.player3.y == -1 ){
      for(let gg = -1; gg < 2;gg++)
      danger_array.push([game_array.player3.head[0]+game_array.player3.x+gg, 
      game_array.player3.head[1]+ game_array.player3.y + game_array.player3.y ])
      for(let gg = -2; gg < 3;gg++)
      danger_array.push([game_array.player3.head[0]+game_array.player3.x+gg, 
      game_array.player3.head[1]+ game_array.player3.y + game_array.player3.y + game_array.player3.y ])
      for(let gg = -3; gg < 4;gg++)
      danger_array.push([game_array.player3.head[0]+game_array.player3.x+gg, 
      game_array.player3.head[1]+ game_array.player3.y + game_array.player3.y + game_array.player3.y + game_array.player3.y ])
    }

  }
  if(game_array.who_have_fire_buff == 4){
    danger_array.push([game_array.player4.head[0]+game_array.player4.x,game_array.player4.head[1]+game_array.player4.y] )
    if(game_array.player4.x == 1 || game_array.player4.x == -1 ){
      for(let gg = -1; gg < 2;gg++)
      danger_array.push([game_array.player4.head[0]+game_array.player4.x+game_array.player4.x, 
      game_array.player4.head[1]+ game_array.player4.y + gg ])
      for(let gg = -2; gg < 3;gg++)
      danger_array.push([game_array.player4.head[0]+game_array.player4.x+game_array.player4.x+game_array.player4.x, 
      game_array.player4.head[1]+ game_array.player4.y + gg ])
      for(let gg = -3; gg < 4;gg++)
      danger_array.push([game_array.player4.head[0]+game_array.player4.x+game_array.player4.x+game_array.player4.x+game_array.player4.x, 
      game_array.player4.head[1]+ game_array.player4.y + gg ])
    }
    if(game_array.player4.y == 1 || game_array.player4.y == -1 ){
      for(let gg = -1; gg < 2;gg++)
      danger_array.push([game_array.player4.head[0]+game_array.player4.x+gg, 
      game_array.player4.head[1]+ game_array.player4.y + game_array.player4.y ])
      for(let gg = -2; gg < 3;gg++)
      danger_array.push([game_array.player4.head[0]+game_array.player4.x+gg, 
      game_array.player4.head[1]+ game_array.player4.y + game_array.player4.y + game_array.player4.y ])
      for(let gg = -3; gg < 4;gg++)
      danger_array.push([game_array.player4.head[0]+game_array.player4.x+gg, 
      game_array.player4.head[1]+ game_array.player4.y + game_array.player4.y + game_array.player4.y + game_array.player4.y ])
    }
    
  }
  let new_head_cor
  let old_head_cor

  if(player == 1){
    new_head_cor = [game_array.player1.head[0]+game_array.player1.x,game_array.player1.head[1]+game_array.player1.y]
    old_head_cor = [game_array.player1.head[0],game_array.player1.head[1]]

  
  }
  if(player == 2){
    new_head_cor = [game_array.player2.head[0]+game_array.player2.x,game_array.player2.head[1]+game_array.player2.y]
    old_head_cor = [game_array.player2.head[0],game_array.player2.head[1]]
    
  }
  if(player == 3){
    new_head_cor = [game_array.player3.head[0]+game_array.player3.x,game_array.player3.head[1]+game_array.player3.y]
    old_head_cor = [game_array.player3.head[0],game_array.player3.head[1]]
    
  }
  if(player == 4){
    new_head_cor = [game_array.player4.head[0]+game_array.player4.x,game_array.player4.head[1]+game_array.player4.y]
    old_head_cor = [game_array.player4.head[0],game_array.player4.head[1]]
    
  }
  for(let p = 0; p < danger_array.length; p++){
    if((danger_array[p][0] == new_head_cor[0] && danger_array[p][1] == new_head_cor[1])||(danger_array[p][0] == old_head_cor[0] && danger_array[p][1] == old_head_cor[1]))
      return true
  }
  return false
}


    function check_on_win(){
      if(game_array.player1.tail.length > need_for_win - 1)
      game_array.winer = 1;
      
      if(game_array?.player2?.tail?.length > need_for_win - 1)
      game_array.winer = 2;

      if(game_array?.player3?.tail?.length > need_for_win - 1)
      game_array.winer = 3;

      if(game_array?.player4?.tail?.length > need_for_win - 1)
      game_array.winer = 4;
      if(game_array.player1?.life && !game_array.player2?.life && !game_array.player3?.life && !game_array.player4?.life)
      game_array.winer = 1;
      if(!game_array.player1?.life && game_array.player2?.life && !game_array.player3?.life && !game_array.player4?.life)
      game_array.winer = 2;
      if(!game_array.player1?.life && !game_array.player2?.life && game_array.player3?.life && !game_array.player4?.life)
      game_array.winer = 3;
      if(!game_array.player1?.life && !game_array.player2?.life && !game_array.player3?.life && game_array.player4?.life)
      game_array.winer = 4;
    }


function play_game(){
  let canv = document.getElementById("canvas")
  ctx.clearRect(0,0,canv.width,canv.height);

  if(game_array.was_click && !game_array.is_paused) {
  check_on_win()
  if(game_array.winer){
    clearInterval(intervalVarible);
    output_map()
    return
  }
  generete_food();
      if(game_array.who_have_immortal){ 
      game_array.is_active_immortal--;
    }
    if(game_array.who_have_ice_buff ){ 
      game_array.is_ice_active--;
    }
    if(game_array.who_have_fire_buff ){ 
      game_array.is_fire_active--;
    }
    if(game_array.player1?.life > 0 && ( (game_array.is_ice_active >0 && game_array.who_have_ice_buff == 1) || !game_array.is_ice_active || game_array.is_ice_active < 0)) {
      if ((check_on_hit_tails(game_array.player1)||check_on_hit_fire(1))&& !(game_array.is_active_immortal > 0 && game_array.who_have_immortal == 1)){
        game_array.player1.life=game_array.player1.life-1
        game_array.player1.tail =[]
        game_array.player1.head =[]
      } 
      else{
        move_player(1)
      }
    }
    
    if(game_array.player2?.life > 0 && ( (game_array.is_ice_active >0 && game_array.who_have_ice_buff == 2) || !game_array.is_ice_active || game_array.is_ice_active < 0)) {
      if ((check_on_hit_tails(game_array.player2)||check_on_hit_fire(2)) && !(game_array.is_active_immortal > 0 && game_array.who_have_immortal == 2)){
        game_array.player2.life=game_array.player2.life-1 
        game_array.player2.tail =[]
        game_array.player2.head =[]
      }
      else{
        move_player(2)
      }
    }
    if(game_array.player3?.life > 0 && ( (game_array.is_ice_active >0 && game_array.who_have_ice_buff == 3) || !game_array.is_ice_active || game_array.is_ice_active < 0)) {
      if ((check_on_hit_tails(game_array.player3)||check_on_hit_fire(3))&& !(game_array.is_active_immortal > 0 && game_array.who_have_immortal == 3)){
        game_array.player3.life=game_array.player3.life-1
        game_array.player3.tail =[]
        game_array.player3.head =[]
      } 
      else{
        move_player(3)
      }
    }
    if(game_array.player4?.life > 0 && ( (game_array.is_ice_active >0 && game_array.who_have_ice_buff == 4) || !game_array.is_ice_active || game_array.is_ice_active < 0)) {
      if ((check_on_hit_tails(game_array.player4)||check_on_hit_fire(4))&& !(game_array.is_active_immortal > 0 && game_array.who_have_immortal == 4)){
        game_array.player4.life=game_array.player4.life-1
        game_array.player4.tail =[]
        game_array.player4.head =[]
      } 
      else{
        move_player(4)
      }
    }
  }
  
  if(game_array?.player1?.life == 1){
    outputlayer(1)
  }
  if(game_array?.player2?.life == 1){
    outputlayer(2)
  }
  if(game_array?.player3?.life == 1){
    outputlayer(3)
  }
  if(game_array?.player4?.life == 1){
    outputlayer(4)
  }
  do_static_work();
  output_map()
  
}

function create_game(players) {
  game_array = {}
  game.innerHTML =``
  let pagecontrol = document.createElement("div")
  pagecontrol.className = "pagecontrol"
  let btn_rules = document.createElement("button")
  btn_rules.onclick = function () {
            show_rules();
    clearInterval(intervalVarible);

  }
  btn_rules.innerHTML= "Rules"

  let btn_back = document.createElement("button")
  btn_back.innerHTML= "Back"
  btn_back.onclick = function () {
    clearInterval(intervalVarible);
    initing();
  }
  pagecontrol.append(btn_rules)
  pagecontrol.append(btn_back)
  game.append(pagecontrol)
  let canvas = document.createElement("canvas")
  canvas.width = "1354"
  canvas.height = "813"
  canvas.id="canvas"
  game_array.was_click = 0;

  game.append(canvas)
  if(players > 1) {
  game_array.map = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
    [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
    [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],
    [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
    [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
    [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
    [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
    [1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ]
    ctx = canvas.getContext("2d");
    game_array.food = []
    game_array.players = 2;
    //for_buff
    game_array.break_point = 6;
    game_array.break_count = 0;
    game_array.max_was_before_break_count = 0;
    game_array.which_buff = 0;
    game_array.is_was_toched = 0;

    game_array.is_ice_active = 0;//ice
    game_array.who_have_ice_buff = 0;
    game_array.is_active_immortal = 0;//immortal
    game_array.who_have_immortal = 0;
    game_array.is_fire_active = 0;//fire
    game_array.who_have_fire_buff = 0;
    // buff
    game_array.winer = 0;
    game_array.is_paused = false
  game_array.player1 ={
    length: 1,
    player: 1,
    tail: [[5,5]],
    head: [5,5],
    x: 1,
    y: 0,
    power: 0,
    life: 1,
    can_move: 1,
    color:"green",
    head_color: "lime"
  }


  game_array.player2 ={
    length: 1,
    tail: [[44,24]],
    head: [44,24],
    x: -1,
    y: 0,
    power: 0,
    can_move: 1,
    life: 1,
    color:"#5cd3ff",
    head_color: "#006aff"
  }
  if(players > 2) {
    game_array.players = 3;

    game_array.player3 ={
    length: 1,
    tail: [[5,24]],
    head: [5,24],
    x:0,
    y: -1,
    power: 0,
    can_move: 1,
    life: 1,
    color:"pink",
    head_color: "red"
  }
  game_array.map = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ]
  }
  if(players > 3) {
    game_array.players = 4;

    game_array.player4 ={
    length: 1,
    tail: [[44,5]],
    head: [44,5],
    x: 0,
    y: 1,
    power: 0,
    can_move: 1,
    life: 1,
    color:"#fff98f",
    head_color: "#fff200"
  }
  game_array.map = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ]
  }
    }

    intervalVarible = setInterval(play_game, TimeConst);   
    clickListener = document.addEventListener("keydown", keyPush);
}
//24
function keyPush(evt) {
  game_array.was_click = 1;
  switch(evt.keyCode){
    case 13:
    game_array.is_paused = !game_array.is_paused
    case 82:
      if(game_array?.winer)
        create_game(game_array?.players)
    case 37:
    if(game_array.player2.x != 1 && game_array.player2.can_move &&game_array.player2.x != -1 ){
      game_array.player2.can_move = 0
      game_array.player2.x = -1
      game_array.player2.y = 0
    }
    

    break;
    case 38:
    if(game_array.player2.y != 1&& game_array.player2.can_move&&game_array.player2.y != -1 ){
      game_array.player2.can_move = 0

      game_array.player2.x = 0
      game_array.player2.y = -1
    }
    break;
    case 39:
    if(game_array.player2.x != -1 && game_array.player2.can_move &&game_array.player2.x != 1 ){
      game_array.player2.can_move = 0

      game_array.player2.x = 1
      game_array.player2.y = 0
    }
    break;
    case 40:
    if(game_array.player2.y != -1&& game_array.player2.can_move &&game_array.player2.y!= 1 ){
      game_array.player2.can_move = 0

      game_array.player2.x = 0
      game_array.player2.y = 1
    }
    break;
    // player 2 arrows /|\
    case 65:
    if(game_array.player1.x != 1 && game_array.player1.can_move &&game_array.player1.x != -1 ){
      game_array.player1.can_move = 0
      game_array.player1.x = -1
      game_array.player1.y = 0
    }
    break;
    case 87:
    if(game_array.player1.y != 1&& game_array.player1.can_move&&game_array.player1.y != -1 ){
      game_array.player1.can_move = 0

      game_array.player1.x = 0
      game_array.player1.y = -1
    }
    break;
    case 68:
    if(game_array.player1.x != -1 && game_array.player1.can_move &&game_array.player1.x != 1 ){
      game_array.player1.can_move = 0

      game_array.player1.x = 1
      game_array.player1.y = 0
    }
    break;
    case 83:
    if(game_array.player1.y != -1&& game_array.player1.can_move &&game_array.player1.y!= 1 ){
      game_array.player1.can_move = 0

      game_array.player1.x = 0
      game_array.player1.y = 1
    }
    break;
    //vgbn
    case 86:
    if(game_array.player3.x != 1 && game_array.player3.can_move &&game_array.player3.x != -1 ){
      game_array.player3.can_move = 0
      game_array.player3.x = -1
      game_array.player3.y = 0
    }
    break;
    case 71:
    if(game_array.player3.y != 1&& game_array.player3.can_move&&game_array.player3.y != -1 ){
      game_array.player3.can_move = 0

      game_array.player3.x = 0
      game_array.player3.y = -1
    }
    break;
    case 78:
    if(game_array.player3.x != -1 && game_array.player3.can_move &&game_array.player3.x != 1 ){
      game_array.player3.can_move = 0
      game_array.player3.x = 1
      game_array.player3.y = 0
    }
    break;
    case 66:
    if(game_array.player3.y != -1&& game_array.player3.can_move &&game_array.player3.y!= 1 ){
      game_array.player3.can_move = 0

      game_array.player3.x = 0
      game_array.player3.y = 1
    }
    break;
    //kol;
    case 75:
    if(game_array.player4.x != 1 && game_array.player4.can_move &&game_array.player4.x != -1 ){
      game_array.player4.can_move = 0
      game_array.player4.x = -1
      game_array.player4.y = 0
    }
    break;
    case 79:
    if(game_array.player4.y != 1&& game_array.player4.can_move&&game_array.player4.y != -1 ){
      game_array.player4.can_move = 0

      game_array.player4.x = 0
      game_array.player4.y = -1
    }
    break;
    case 186:
    if(game_array.player4.x != -1 && game_array.player4.can_move &&game_array.player4.x != 1 ){
      game_array.player4.can_move = 0
      game_array.player4.x = 1
      game_array.player4.y = 0
    }
    break;
    case 76:
    if(game_array.player4.y != -1&& game_array.player4.can_move &&game_array.player4.y!= 1 ){
      game_array.player4.can_move = 0

      game_array.player4.x = 0
      game_array.player4.y = 1
    }
    break;
  }
}  

function getFirstPage() {
  let result = []
  if(devices.test(navigator.userAgent)){
    let h1 = document.createElement('h1')
    h1.append("Sorry but this page only for PC")
    result.push(h1)
    return result
  }
  let div_header=document.createElement("div");
  div_header.className="div_header"
  let h1 = document.createElement('h1')
  h1.append("SUBG")
  div_header.append(h1);
  result.push(div_header)
  let div_with_btn=document.createElement("div");
  div_with_btn.className="div_with_btn"
  let btn_2_players = document.createElement('button')
  btn_2_players.innerHTML = "2 players"
  btn_2_players.onclick = function () {
            create_game(2);
  }
  let btn_3_players = document.createElement('button')
  btn_3_players.innerHTML = "3 players"
  btn_3_players.onclick = function () {
            create_game(3);
  }
  let btn_4_players = document.createElement('button')
  btn_4_players.innerHTML = "4 players"
  btn_4_players.onclick = function () {
            create_game(4);
  }
  let btn_rules = document.createElement('button')
  btn_rules.innerHTML = "Rules"
  btn_rules.onclick = function () {
            show_rules();
  }
  div_with_btn.append(btn_2_players)
  div_with_btn.append(btn_3_players)
  div_with_btn.append(btn_4_players)
  div_with_btn.append(btn_rules)
  result.push(div_with_btn)
  let links_block = document.createElement('div')
  links_block.className = "links_block"
  let link_source_code = document.createElement('a')
  link_source_code.href= "https://github.com/MykytaBAshenko/snakeunknownsbattlegrounds"
  link_source_code.target= "blank"
  link_source_code.innerHTML= "Source code"
  
  let link_creator1 = document.createElement('a')
  link_creator1.href= "https://github.com/MykytaBAshenko"
  link_creator1.target= "blank"
  link_creator1.innerHTML= "Developer: Mykyta Bashenko"
  links_block.append(link_creator1)
  let link_creator2 = document.createElement('a')
  link_creator2.href= "https://github.com/vkmetyk"
  link_creator2.target= "blank"
  link_creator2.innerHTML= "Tester: vkmetyk"

  links_block.append(link_source_code)
  links_block.append(link_creator1)
  links_block.append(link_creator2)

  result.push(links_block)
  return result
}
initing()
function show_rules() {
  game.innerHTML = `
  <div class="rules_page">
    <div><button id="dumb_btn">Back on start page</button></div>
    <div class="rules_title">Rules</div>
    <div class="rules_text"> 
The rules are simple, collect ${need_for_win} food or be the last on the map.
Don't touch your tail or your opponent's tail. The wall will teleport you to the other end of the map.
Also collect buffs to destroy your opponent.
</div>
<div class="buffs_list">
  <div class="orange">You become immortal on ${duration_immortal} steps</div>
  <div class="white">Evryone except you stop moving on ${duration_ice} steps</div>
  <div class="red">Begins to breathe fire ${duration_fire} steps</div>
  </div>
  <div class="control_list">
  <h1>Control</h1>
  <div class="control_list_shell">
    <div class="row_control green">
      <div>W</div>
      <div>A</div>
      <div>S</div>
      <div>D</div>
    </div>
    <div class="row_control blue">
      <div>&#8593;</div>
      <div>&#8592;</div>
      <div>&#8595;</div>
      <div>&#8594;</div>
    </div>
    <div class="row_control redd">
      <div>G</div>
      <div>V</div>
      <div>B</div>
      <div>N</div>
    </div>
    <div class="row_control yellow">
      <div>K</div>
      <div>O</div>
      <div>L</div>
      <div>:</div>
    </div>
    <div class="controll_div">
      On click Enter game paused<br><br>
      On click R in the end of game restarted
    </div>
    </div>

  </div>
  </div>
  `
  let dumb_btn =document.getElementById('dumb_btn')
  dumb_btn.onclick = function() {
    initing()
  }
}


