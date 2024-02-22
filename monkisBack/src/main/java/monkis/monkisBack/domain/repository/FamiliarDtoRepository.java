package monkis.monkisBack.domain.repository;

import monkis.monkisBack.domain.dto.FamiliarDto;
import monkis.monkisBack.persistence.entity.Familiar;

import java.util.List;
import java.util.Optional;

public interface FamiliarDtoRepository {
    List<FamiliarDto> getAll();
    FamiliarDto getFamiliarById(int idFamiliar);
    Optional<List<FamiliarDto>> getByPrincipal(int idPrincipal);
    FamiliarDto save(FamiliarDto familiarDto);
    FamiliarDto update (FamiliarDto familiarDto);
    boolean deleteById (int idFamiliar);
}
