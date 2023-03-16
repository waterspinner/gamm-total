const pools = {};
let poolBtn = document.querySelector('.pool-submit');

window.addEventListener('load', () => {
    fetch('https://api.osl.zone/osmosis/gamm/v1beta1/pools?pagination.limit=9999')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        for(e in data.pools){
            pools[data.pools[e].id] = {amount: data.pools[e].total_shares.amount};
        }
        poolBtn.addEventListener('click', () => {
            let poolId = document.querySelector('.pool-number')
            console.log(poolId.value)
            console.log(pools[poolId.value].amount)
            displayGamm = document.querySelector('.gamm-total');
            displayGamm.innerHTML = 'Total gamm:' + pools[poolId.value].amount;
    })
      })
})


