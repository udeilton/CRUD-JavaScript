

// [CRUD] Javascript Básico

const miniTwitter = {
    usuarios: [
        {
            username: 'jhod',
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'jhod',
            content: 'Meu primeiro post'
        }
    ],
};
// CREATE
function criaPosts(dados){
    miniTwitter.posts.push({
        id: miniTwitter.posts.length +1,        
        owner:dados.owner,
        content: dados.content
    });    
}
criaPosts({owner: 'jhod', content: 'Segundo post'})
console.log(miniTwitter.posts) 
// READ
function pegaPosts(){
    return miniTwitter.posts;
}
console.log(pegaPosts())
// UPDATE
function atualizaContentDoPost(id, novoConteudo){
    const postQueVaiSerAtualizado = pegaPosts().find((post) => {
        return post.id === id;
    });
    console.log(postQueVaiSerAtualizado)
    postQueVaiSerAtualizado.content = novoConteudo

}
atualizaContentDoPost(1,'Novo conteúdo do post')
console.log(pegaPosts())
//DELETE
function apagaPost(id){
    const listaDePostsAtualizada = pegaPosts().filter((postAtual) =>{
        return postAtual.id !== id;
    });
    miniTwitter.posts = listaDePostsAtualizada;
}
apagaPost(2);
console.log(pegaPosts())