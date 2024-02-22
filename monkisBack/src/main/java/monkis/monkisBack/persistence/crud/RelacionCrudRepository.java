package monkis.monkisBack.persistence.crud;

import monkis.monkisBack.persistence.entity.Relacion;
import org.springframework.data.repository.CrudRepository;

public interface RelacionCrudRepository extends CrudRepository<Relacion, Integer> {
}
