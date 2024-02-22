package monkis.monkisBack.domain.service;

import monkis.monkisBack.domain.dto.FamiliarDto;
import monkis.monkisBack.domain.repository.FamiliarDtoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FamiliarService {
    @Autowired
    private FamiliarDtoRepository familiarDtoRepository;

    public List<FamiliarDto> getAll(){
        return familiarDtoRepository.getAll();
    }
    public FamiliarDto getFamiliarById(int idFamiliar){
        return familiarDtoRepository.getFamiliarById(idFamiliar);
    }
    public Optional<List<FamiliarDto>> getByPrincipal(int idPrincipal){
        return familiarDtoRepository.getByPrincipal(idPrincipal);
    }
    public FamiliarDto save(FamiliarDto familiarDto){
        return familiarDtoRepository.save(familiarDto);
    }
    public FamiliarDto update(FamiliarDto familiarDto){
        return familiarDtoRepository.update(familiarDto);
    }
    public boolean deleteById(int idFamiliar){
        return familiarDtoRepository.deleteById(idFamiliar);
    }
}
