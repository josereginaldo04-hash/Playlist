const Playlist = (nome, dono = "turma", ...musicas) => ({ nome, dono, musicas });

console.log("Padrão:", Playlist("Aula", undefined, "Música A", "Música B"));

const p1 = Playlist("P1", "Ana", "Song 1", "Song 2");
const p2 = Playlist("P2", "Leo", "Song 3", "Song 4");
const junta = Playlist("Junta", "Dupla", ...p1.musicas, ...p2.musicas);
console.log("Junta:", junta);

const copia = { ...junta, musicas: [...junta.musicas, "Song 5"] };
console.log("Original:", junta.musicas, "| Cópia:", copia.musicas);

const duracoes = [210, 185, 320, 150, 240];
console.log("Mais longa (s):", Math.max(...duracoes));

const padrao = { volume: 50, aleatorio: false, repetir: "nenhum" };
const custom = { ...padrao, volume: 80, aleatorio: true };
console.log("Player:", { padrao, custom });