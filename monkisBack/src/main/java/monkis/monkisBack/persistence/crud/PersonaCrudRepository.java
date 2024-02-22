package monkis.monkisBack.persistence.crud;

import monkis.monkisBack.persistence.entity.Persona;
import org.springframework.data.repository.CrudRepository;

public interface PersonaCrudRepository extends CrudRepository<Persona, Integer> {
}
