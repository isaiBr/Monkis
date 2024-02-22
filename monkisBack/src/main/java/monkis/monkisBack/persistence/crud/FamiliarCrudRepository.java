package monkis.monkisBack.persistence.crud;

import monkis.monkisBack.persistence.entity.Familiar;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface FamiliarCrudRepository extends CrudRepository<Familiar, Integer> {
    Optional<List<Familiar>> findFamiliarByIdPrincipal (int idPrincipal);
}
