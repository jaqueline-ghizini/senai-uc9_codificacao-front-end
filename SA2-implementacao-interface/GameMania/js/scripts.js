
/*busca produto*/
function busca() {
  window.alert("Não é possível pesquisar no momento.")
}

/*menu hamburger*/

$("#hamburger_menu").click(function () {
  $("#menu").toggleClass("menu-ativo")
})
$(".dropdown-container").on("mouseenter", function(){
  $("#menu_acessorios").removeClass("menu_acessorios_desativado").addClass("menu_acessorios_ativado");
})
$(".dropdown-container").on("mouseleave", function(){
  $("#menu_acessorios").removeClass("menu_acessorios_ativado").addClass("menu_acessorios_desativado");
})



/*slide produtos destaque*/

let cont_click = 0;
let click_produto3 = 0;
let click_produto2 =0;
let click_produto1 = 0;
let limit_click = 0;
let click_check = 0;

$("#seta-destaques2").click(function(){
  /*quando fica 4 produto no layout responsivo */
  if ($("#dest_produto4").is(":visible")&&(cont_click==0)){
    $("#dest_produto1").removeClass("aparecer").addClass("desaparecer");
    $("#dest_produto5").removeClass("desaparecer").addClass("aparecer");
    limit_click = 1;
  }else
  /*quando fica 3 produto no layout responsivo */
  if ($("#dest_produto3").is(":visible")&&(cont_click==0)){
    $('#dest_produto4').css('display', 'initial');
    $("#dest_produto1").removeClass("aparecer").addClass("desaparecer");
    $("#dest_produto4").removeClass("desaparecer").addClass("aparecer");
    click_produto3=1;
    limit_click = 2;
  }else
  if ((click_produto3==1)&&(cont_click==1)){
    $("#dest_produto2").removeClass("aparecer").addClass("desaparecer");
    $("#dest_produto5").removeClass("desaparecer").addClass("aparecer");
  }else
  /*quando fica 2 produto no layout responsivo */
  if ($("#dest_produto2").is(":visible")&&(cont_click==0)){
    $('#dest_produto3').css('display', 'initial');
    $("#dest_produto1").removeClass("aparecer").addClass("desaparecer");
    $("#dest_produto3").removeClass("desaparecer").addClass("aparecer").show();
    click_produto2 = 1;
    limit_click = 3;
  }else
  if((click_produto2==1)&&(cont_click==1)){
    $('#dest_produto4').css('display', 'initial');
    $("#dest_produto2").removeClass("aparecer").addClass("desaparecer").hide();
    $("#dest_produto4").removeClass("desaparecer").addClass("aparecer").show();
  }else
  if((click_produto2==1)&&(cont_click==2)){
    $("#dest_produto3").removeClass("aparecer").addClass("desaparecer").hide();
    $("#dest_produto5").removeClass("desaparecer").addClass("aparecer").show();
  }else
  /*quando fica 1 produto no layout responsivo */
  if ($("#dest_produto1").is(":visible")&&(cont_click==0)){
    $('#dest_produto2').css('display', 'initial');
    $("#dest_produto1").removeClass("aparecer").addClass("desaparecer").hide();
    $("#dest_produto2").removeClass("desaparecer").addClass("aparecer").show();
    click_produto1 = 1;
    limit_click = 4;
  }else
  if((click_produto1==1)&&(cont_click==1)){
    $('#dest_produto3').css('display', 'initial');
    $("#dest_produto2").removeClass("aparecer").addClass("desaparecer").hide();
    $("#dest_produto3").removeClass("desaparecer").addClass("aparecer").show();
  }else
  if((click_produto1==1)&&(cont_click==2)){
    $('#dest_produto4').css('display', 'initial');
    $("#dest_produto3").removeClass("aparecer").addClass("desaparecer").hide();
    $("#dest_produto4").removeClass("desaparecer").addClass("aparecer").show();
  }else
  if((click_produto1==1)&&(cont_click==3)){
    $("#dest_produto4").removeClass("aparecer").addClass("desaparecer").hide();
    $("#dest_produto5").removeClass("desaparecer").addClass("aparecer").show();
  }
 
  if(cont_click < limit_click){
    cont_click = cont_click + 1;
  }
})


$("#seta-destaques1").click(function(){
    click_check =0;
    /*quando fica 4 produto no layout responsivo */
    if ($("#dest_produto5").is(":visible")&&(cont_click==1)){
      $("#dest_produto5").removeClass("aparecer").addClass("desaparecer");
      $("#dest_produto1").removeClass("desaparecer").addClass("aparecer");
      click_check=1;
    }else
    /*quando fica 3 produto no layout responsivo */
    if ((click_produto3==1)&&(cont_click==2)){
      $("#dest_produto5").removeClass("aparecer").addClass("desaparecer");
      $("#dest_produto2").removeClass("desaparecer").addClass("aparecer");
      click_check=1;
    }else
    if ((click_produto3==1)&&(cont_click==1)){
      $("#dest_produto4").removeClass("aparecer").addClass("desaparecer").hide();
      $("#dest_produto1").removeClass("desaparecer").addClass("aparecer");
      click_check = 1;
    }else/*quando fica 2 produto no layout responsivo */
    if((click_produto2==1)&&(cont_click==3)){
      $("#dest_produto5").removeClass("aparecer").addClass("desaparecer").hide();
      $("#dest_produto3").removeClass("desaparecer").addClass("aparecer").show();
      click_check=1;
    }else 
    if((click_produto2==1)&&(cont_click==2)){
      $("#dest_produto4").removeClass("aparecer").addClass("desaparecer").hide();
      $("#dest_produto2").removeClass("desaparecer").addClass("aparecer").show();
      click_check=1;
    }else
    if ((click_produto2==1)&&(cont_click==1)){
      $("#dest_produto3").removeClass("aparecer").addClass("desaparecer").hide();
      $("#dest_produto1").removeClass("desaparecer").addClass("aparecer").show();
      click_check=1;
    }else /*quando fica 1 produto no layout responsivo */
    if((click_produto1==1)&&(cont_click==4)){
      $("#dest_produto5").removeClass("aparecer").addClass("desaparecer").hide();
      $("#dest_produto4").removeClass("desaparecer").addClass("aparecer").show();
      click_check=1;
    }else
    if((click_produto1==1)&&(cont_click==3)){
      $("#dest_produto4").removeClass("aparecer").addClass("desaparecer").hide();
      $("#dest_produto3").removeClass("desaparecer").addClass("aparecer").show();
      click_check=1;
    }else
    if((click_produto1==1)&&(cont_click==2)){
      $("#dest_produto3").removeClass("aparecer").addClass("desaparecer").hide();
      $("#dest_produto2").removeClass("desaparecer").addClass("aparecer").show();
      click_check=1;
    }if ((click_produto1==1)&&(cont_click==1)){
      $("#dest_produto2").removeClass("aparecer").addClass("desaparecer").hide();
      $("#dest_produto1").removeClass("desaparecer").addClass("aparecer").show();
      click_check=1;
    }
    

    if(cont_click>=0){
        if(click_check==1){
        cont_click = cont_click-1;
      }
    }
})


/*lista de produtos novidades*/
/*outra forma de fazer o slide com glider...*/

const $slideNovidades = document.querySelector('.glider')
  new Glider($slideNovidades,{
    slidesToShoe: 1,
    slidesToScroll: 1,

    arrows:{
      prev: ".glider-prev",
      next: ".glider-next",
    },
    scrollLock:true,

    responsive: [
      {
        breakpoint: 595,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1169,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  })


/*listas de produtos*/

let listaProdutos = [
  {
    titulo:"Teclado Mecânico Gamer Redragon",
    descricao:"R$ 323,65",
    anterior:""
  },
  {
    titulo:"Fone de ouvido versão gamer",
    descricao:"R$ 165,99",
    anterior:"De: <s>R$ 189,99</s>"
  },
  {
    titulo:"Mouse Gamer Redragon <br> Cobra",
    descricao:"R$ 114,90",
    anterior:""
  },
  {
    titulo:"Cadeira Gamer Craft",
    descricao:"R$ 889,99",
    anterior:"De: <s>R$ 1699,99</s>"
  },
  {
    titulo:"Game  Rise of The Tomb Raider",
    descricao:"R$ 94,89",
    anterior:""
  },
  {
    titulo:"Game Horizon Forbidden<br> West",
    descricao:"R$ 206,79",
    anterior:"De: <s>R$ 234,99</s>"
  },
  {
    titulo:"Game The Sims 4 - PC",
    descricao:"R$ 82,34",
    anterior:"De: <s>R$99,90</s>"
  },
  {
    titulo:"Game The Last Of Us Part II",
    descricao:"R$ 129,90",
    anterior:""
  },
  {
    titulo:"Console PlayStation 5",
    descricao:"R$ 4.499,00",
    anterior:""
  },
  {
    titulo:"Console Xbox Series X",
    descricao:"R$ 4.999,00",
    anterior:"De: <s>R$ 5.225,00</s>"
  }
 
]  

/*GALERIA*/
function renderizarProduto() {
    let espaco_galeria = document.getElementById("espaco-galeria")
  
    let template = "";
    
  
  
    for (let index = 0; index < listaProdutos.length; index++) {
      const produto = listaProdutos[index];
      let imgproduto='img/produto'+index+'.jpg';
  
      template += `
      <div class="cardgaleria"><img src=${imgproduto} class="img_galeria" alt="Foto do Produto"> <h3>${produto.titulo}</h3> <h4>${produto.descricao}</h4> <p>${produto.anterior}</p> </div >
      `
    }
  
    espaco_galeria.innerHTML = template;
  }

