var app = angular.module('myApp', []);

app.controller('controller', function($scope, $window){
	$scope.computadores = [
		
	];
	
	$scope.nBreaks = [
		
	];
	
	$scope.ramos=['Supermercado', 'Loja', 'Mat. Construção', 'Outras'];
	
	$scope.lojas=['Matriz', 'Filial'];
	
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/
	$scope.ramoDisabled = true;
	$scope.filiaisDisabled = true;
	$scope.qtdFiliaisDisabled = true;
	$scope.internetDisabled = true;
	$scope.buscaPrecoDisabled = true;
	$scope.impEtiDisabled = true;
	$scope.tefDisabled = true;
	$scope.leitorMesaDisabled=true;
	$scope.leitorMaoDisabled=true;
	$scope.palmDisabled=true;
	$scope.sistemaDisabled=true;
	$scope.ipFixoDisabled=true;
	$scope.pessoaLancDisabled=true;
	$scope.lancPrecoDisabled=true;
	$scope.recebeMercDisabled=true;
	$scope.compraVendaDisabled=true;
	$scope.fiscalCaixaDisabled=true;
	$scope.respFechamentoDisabled=true;
	$scope.respFinanceiroDisabled=true;
	
	
	$scope.setOutroRamo= function(){
		if($scope.selRamo === 'Outras')
			$scope.ramoDisabled = false;
		else{
			$scope.ramoDisabled = true;
			delete $scope.selRamo;
			
		}
	};
	
	$scope.setLoja= function(){
		if($scope.selLoja === 'Matriz')
			$scope.filiaisDisabled = false;
		else{
			$scope.filiaisDisabled = true;
			$scope.chkFilial = false;
			delete($scope.qtdFilial);
			$scope.qtdFiliaisDisabled=true;
		}
	};
	
	$scope.setQtdFiliais=function(){
		console.log($scope.chkFilial);
		if($scope.chkFilial){
			$scope.qtdFiliaisDisabled=false;
		}
		else{
			$scope.qtdFiliaisDisabled=true;
			delete($scope.qtdFilial);
		}
	};
	
	$scope.setOutraInternet= function(){
		$scope.internetDisabled = $scope.tInternet != 'internetOutras'? true: false;
	};
	
	$scope.setBuscaPreco= function(){
		$scope.buscaPrecoDisabled = $scope.selBuscaPreco != 'sim'? true: false;
	};
	
	$scope.setImpEti= function(){
		$scope.impEtiDisabled = $scope.selImpEti != 'sim'? true: false;
	};
	
	$scope.setTef= function(){
		$scope.tefDisabled = $scope.selTef != 'sim'? true: false;
	};

	$scope.setLeitorMesa= function(){
		$scope.leitorMesaDisabled = $scope.selLeitorMesa != 'sim'? true: false;
	};
	
	$scope.setLeitorMao= function(){
		$scope.leitorMaoDisabled = $scope.selLeitorMao != 'sim'? true: false;
	};
	
	$scope.setPalm= function(){
		$scope.palmDisabled = $scope.selPalm != 'sim'? true: false;
	};
	
	$scope.setSistema= function(){
		$scope.sistemaDisabled = $scope.selSistema != 'sim'? true: false;
	};
	
	$scope.setIpFixo= function(){
		$scope.ipFixoDisabled = $scope.selIpFixo != 'sim'? true: false;
	};
	
	$scope.setPessoaLanc= function(){
		$scope.pessoaLancDisabled = $scope.selPessoaLanc != 'nao'? true: false;
	};
	
	$scope.setLancPreco= function(){
		$scope.lancPrecoDisabled = $scope.selLancPreco != 'nao'? true: false;	
	};
	
	$scope.setRecebeMerc= function(){
		$scope.recebeMercDisabled = $scope.selRecebeMerc != 'nao'? true: false;
	};
	
	$scope.setCompraVenda= function(){
		$scope.compraVendaDisabled = $scope.selCompraVenda != 'nao'? true: false;
	};
	
	$scope.setFiscalCaixa= function(){
		$scope.fiscalCaixaDisabled = $scope.selFiscalCaixa != 'nao'? true: false;
	};
	
	$scope.setRespFechamento= function(){
		$scope.respFechamentoDisabled = $scope.selRespFechamento != 'sim'? true: false;
	};
	
	$scope.setRespFinanceiro= function(){
		$scope.respFinanceiroDisabled = $scope.selRespFinanceiro != 'sim'? true: false;
	};
	
	
	//console.log(computadores);
	$scope.adicionar = function(computador){
		console.log(computador);
		if(computador.serial)
			computador.serial = 's';
		else
			computador.serial = 'n';
		if(computador.serv)
			computador.serv = 's';
		else
			computador.serv = 'n';
		if(computador.term)
			computador.term = 's';
		else
			computador.term = 'n';
		if(computador.caixa)
			computador.caixa = 's';
		else
			computador.caixa = 'n';
		$scope.computadores.push(angular.copy(computador));
		delete $scope.computador;
	};
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/
	$scope.formDadosEmp = true;
	$scope.formDadosComp = true;
	$scope.formEquip = true;
	$scope.formOutrasInfo = true;
	$scope.formSistema = true;
	$scope.formProc = true;
	
	$scope.toggleDadosEmp= function(){
		$scope.formDadosEmp = $scope.formDadosEmp === false ? true: false;
	}
		
	$scope.toggleDadosComp= function(){
		$scope.formDadosComp = $scope.formDadosComp === false ? true: false;
	}
		
	$scope.toggleEquip= function(){
		$scope.formEquip = $scope.formEquip === false ? true: false;
	}
		
	$scope.toggleOutrasInfo= function(){
		$scope.formOutrasInfo = $scope.formOutrasInfo === false ? true: false;
	}
		
	$scope.toggleSistema= function(){
		$scope.formSistema = $scope.formSistema === false ? true: false;
	}
		
	$scope.toggleProc= function(){
		$scope.formProc = $scope.formProc === false ? true: false;
	}
	
	$scope.validarCNPJ = function(cnpj){
		
		//console.log(cnpj);
		cnpj = cnpj.replace(/[^\d]+/g,'');
		
		if(cnpj.length != 14){
			 $scope.erro="Tamanho CNPJ invalido";
			 $scope.cssClass = 'has-error has-feedback';
			 return;
			 //break;
		}
		
		if(cnpj == "00000000000000" || 
           cnpj == "11111111111111" || 
		   cnpj == "22222222222222" || 
		   cnpj == "33333333333333" || 
		   cnpj == "44444444444444" || 
		   cnpj == "55555555555555" || 
		   cnpj == "66666666666666" || 
		   cnpj == "77777777777777" || 
		   cnpj == "88888888888888" || 
		   cnpj == "99999999999999"){
			$scope.erro="Numero CNPJ invalido";
			$scope.cssClass = 'has-error has-feedback';
			return;
			//break;
		}
		   
		tamanho = cnpj.length - 2
		numeros = cnpj.substring(0,tamanho);
		digitos = cnpj.substring(tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
			soma += numeros.charAt(tamanho - i) * pos--;
			if (pos < 2)
				pos = 9;
		}
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(0)){
			$scope.erro="CNPJ invalido";
			$scope.cssClass = 'has-error has-feedback';
			return;
		}
		  
		tamanho = tamanho + 1;
		numeros = cnpj.substring(0,tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
			soma += numeros.charAt(tamanho - i) * pos--;
			if (pos < 2)
				pos = 9;
		}
		  
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(1)){
			$scope.erro="Dígito verificador invalido";
			$scope.cssClass = 'has-error has-feedback';
			return;
		}			
		$scope.cssClass = 'has-success has-feedback';
		$scope.erro="";
		return;
		
	};
		
	

});


						
						